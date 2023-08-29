'use client';
import React, { useState } from 'react'
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';

export default function Py2CS() {

    const [codeSnippet, setCodeSnippet] = useState('');
    const [convertedCodeSnippet, setConvertedCodeSnippet] = useState('');

    function convertPythonToCSharp() {
        let pythonCode = codeSnippet;

        // Replace comments
        pythonCode = pythonCode.replace(/#(.*)/g, "// $1");

        // Replace print statements
        pythonCode = pythonCode.replace(/print\((.*)\)/g, "Console.WriteLine($1);");

        // Replace input statements
        pythonCode = pythonCode.replace(/input\(\)/g, "Console.ReadLine()");

        // Replace if statements
        pythonCode = pythonCode.replace(/if (.*)\s*:/g, "if ($1)\n    {");

        // Replace else statements
        pythonCode = pythonCode.replace(/else\s*:/g, "else\n    {");

        // Replace variable declarations and assignments
        pythonCode = pythonCode.replace(/(\w+)\s*=\s*(.*)/g, "var $1 = $2;");

        // Add Main method and class
        const csharpCode = `using System;
class Program{
        static void Main(string[] args){
${pythonCode}
        }
    }
`;
        setConvertedCodeSnippet(csharpCode);
    }

    return (
        <section className='w-full text-center'>
            <div className="flex space-x-5">
                <div className="w-1/2">
                    <Textarea
                        value={codeSnippet}
                        placeholder="Enter code snippet here"
                        onChange={(e) => setCodeSnippet(e.target.value)}
                    />
                </div>
                <div className="w-1/2">
                    <Textarea
                        value={convertedCodeSnippet}
                        placeholder="Converted code snippet"
                        onChange={() => { }}
                    />
                </div>
            </div>
            <Button onClick={convertPythonToCSharp} text="Convert" />
        </section>
    )
}
