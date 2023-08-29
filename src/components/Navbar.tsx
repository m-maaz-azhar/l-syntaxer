import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="mt-2">
            <div className="flex space-x-5 p-4 rounded-lg bg-gray-700">
                <Link href="/language-detector" className="text-white hover:text-black-300">Language Detector</Link>
                <Link href="/c-sharp-to-python" className="text-white hover:text-gray-300">C# to Python</Link>
                <Link href="python-to-c-sharp" className="text-white hover:text-gray-300">Python to C#</Link>
            </div>
        </nav>
    )
}
