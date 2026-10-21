'use client'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// Same Atelier Dune hues, lifted only enough for the tokens that sat under 4.5:1
// on #20201d. Comments and plain text already cleared WCAG AA.
const RED = '#DE5C5C'
const ORANGE = '#C3733A'
const PURPLE = '#BD60D7'
const style = {
  ...atelierDuneDark,
  'hljs-variable': { color: RED },
  'hljs-template-variable': { color: RED },
  'hljs-attribute': { color: RED },
  'hljs-tag': { color: RED },
  'hljs-name': { color: RED },
  'hljs-regexp': { color: RED },
  'hljs-link': { color: RED },
  'hljs-selector-id': { color: RED },
  'hljs-selector-class': { color: RED },
  'hljs-number': { color: ORANGE },
  'hljs-meta': { color: ORANGE },
  'hljs-built_in': { color: ORANGE },
  'hljs-builtin-name': { color: ORANGE },
  'hljs-literal': { color: ORANGE },
  'hljs-type': { color: ORANGE },
  'hljs-params': { color: ORANGE },
  'hljs-keyword': { color: PURPLE },
  'hljs-selector-tag': { color: PURPLE },
}

export default function Highlighter({ code, language }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={style}
      wrapLines={true}
      showLineNumbers={true}
      lineNumberStyle={{ color: '#a6a28c' }}
    >
      {code}
    </SyntaxHighlighter>
  )
}
