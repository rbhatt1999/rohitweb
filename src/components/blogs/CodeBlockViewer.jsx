'use client'
import dynamic from 'next/dynamic'

const Highlighter = dynamic(() => import('./Highlighter'), { ssr: true })

export default function CodeBlockViewer({ code, language }) {
  return <Highlighter code={code} language={language} />
}
