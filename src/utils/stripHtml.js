// Turn a (possibly HTML) blog summary/description into clean plain text for
// card excerpts — strips tags and decodes the common entities our content uses.
export default function stripHtml(input = '') {
  return String(input)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/(p|div|li|h[1-6])>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&#x27;/gi, "'")
    .replace(/&lt;|&#60;/gi, '<')
    .replace(/&gt;|&#62;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim()
}
