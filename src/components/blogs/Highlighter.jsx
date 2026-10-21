'use client'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Highlighter({ code, language }) {
  return (
    <SyntaxHighlighter language={language} style={atelierDuneDark} wrapLines={true} showLineNumbers={true}>
      {code}
    </SyntaxHighlighter>
  )
}
