#!/usr/bin/env bash
#
# PostToolUse hook — flags when an edited file is documented in an artifact.
#
# Reads the PostToolUse JSON payload on stdin, extracts the file path, and
# greps artifacts/ for references to it. If any artifact references the file,
# emits additionalContext asking Claude to assess whether the change makes the
# artifact stale. Pure detection — never edits files.
#
# Loop prevention: edits to files under artifacts/ exit immediately.
# Fails silently (exit 0, no output) on any internal error.

repo_root="${CLAUDE_PROJECT_DIR:-}"

parsed="$(node -e '
let raw = "";
process.stdin.on("data", d => raw += d);
process.stdin.on("end", () => {
  try {
    const d = JSON.parse(raw);
    const ti = d.tool_input || {};
    process.stdout.write((ti.file_path || "") + "\n" + (d.cwd || "") + "\n");
  } catch(e) {
    process.stdout.write("\n\n");
  }
});
' 2>/dev/null)"

file_path=""
cwd=""
{ IFS= read -r file_path; IFS= read -r cwd; } <<< "$parsed"

[ -z "$file_path" ] && exit 0

[ -z "$repo_root" ] && repo_root="$cwd"
[ -z "$repo_root" ] && repo_root="$(pwd)"

rel_path="${file_path#"$repo_root"/}"

# Loop prevention: ignore edits to the artifacts themselves.
case "$rel_path" in
  artifacts/*) exit 0 ;;
esac

artifacts_dir="$repo_root/artifacts"
[ -d "$artifacts_dir" ] || exit 0

matches="$(grep -rlF --include='*.md' -e "$rel_path" "$artifacts_dir" 2>/dev/null)"
[ -z "$matches" ] && exit 0

printf '%s' "$matches" | node -e '
const root = process.argv[1];
const relPath = process.argv[2];
let raw = "";
process.stdin.on("data", d => raw += d);
process.stdin.on("end", () => {
  const paths = raw.split("\n").filter(Boolean);
  const rel = [...new Set(paths.map(p => p.startsWith(root + "/") ? p.slice(root.length + 1) : p))].sort();
  const list = rel.join(", ");
  const msg = "[Artifact sync] The file you just edited, `" + relPath + "`, is documented in: " + list + ". " +
    "This is a background note; do NOT interrupt the current request to act on it. " +
    "After you finish the task you were asked to do, and before ending your turn, " +
    "review this note and every other [Artifact sync] note from this turn. For each one, " +
    "judge whether your change actually altered something the artifact documents " +
    "(component behavior, data schema, CSS variables, theming rules, blog schema, route structure). " +
    "For every artifact that is now inaccurate: (1) tell the user plainly that the artifact is stale, " +
    "naming what specifically became wrong, then (2) update the affected sections of that artifact " +
    "to match the new code. If the change touched only comments, formatting, or behavior the " +
    "artifact never documented, take no action.";
  console.log(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "PostToolUse",
      additionalContext: msg
    }
  }));
});
' "$repo_root" "$rel_path" 2>/dev/null

exit 0
