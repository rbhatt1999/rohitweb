'use client'
import React, { useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function CodeBlockViewer({code, language}) {

    return (
        <SyntaxHighlighter language= {language} style={atelierDuneDark} wrapLines={true} showLineNumbers={true} >
            {code}
        </SyntaxHighlighter>
    )
}
