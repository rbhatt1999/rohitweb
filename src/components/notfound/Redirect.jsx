'use client'
import React, { useEffect, useState } from 'react'
import {redirect} from 'next/navigation'

export default function Redirect() {
    const [count, setCount] = useState(5);
    useEffect(() => {
        if (count <= 0) {
            redirect('/')
        }
        else {
            const timer = setTimeout(() => {
                setCount(count - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [count]);
    return (
        <div>
            <h2>Redirecting to Home page in {count} seconds</h2>
        </div>
    )
}
