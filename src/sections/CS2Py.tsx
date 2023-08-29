'use client';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import React, { useState } from 'react'

export default function CS2Py() {
    const [codeSnippet, setCodeSnippet] = useState('');
    const [convertedCodeSnippet, setConvertedCodeSnippet] = useState('');

    function convertCSharpToPython() {
        let csharpCode = codeSnippet;

        // Replace comments
        csharpCode = csharpCode.replace(/\/\/(.*)/g, "# $1");

        // Replace using statements
        csharpCode = csharpCode.replace(/using\s+(\w+(\.\w+)*)\s*;/g, "import $1\n");

        // Replacing Variable Declarations
        csharpCode = csharpCode.replace(/(\w+)\s+(\w+)\s*=\s*(.*);/g, "$2 = $3");

        // Replace namespace and class
        csharpCode = csharpCode.replace(/namespace (\w+)\s*{/, "");
        csharpCode = csharpCode.replace(/class (\w+)\s*{/, "if __name__ == '__main__':");

        // Replace Main method
        csharpCode = csharpCode.replace(/static void Main\(string\[\] args\)\s*{/, "def main():");
        csharpCode = csharpCode.replace(/Console.Write/g, "print");
        csharpCode = csharpCode.replace(/Console.Read\(\)/g, "input()");
        csharpCode = csharpCode.replace(/Console.ReadLine\(\)/g, "input()");
        csharpCode = csharpCode.replace(/int\.Parse/g, "int");
        csharpCode = csharpCode.replace(/if \((.*)\)\s*{/g, "if $1:");
        csharpCode = csharpCode.replace(/else\s*{/g, "else:");

        // Close the main function
        csharpCode += "\nmain()";

        setConvertedCodeSnippet(csharpCode);
    }

    return (
        <section className='w-full text-center'>
            <p className="text-2xl text-center py-2">
                C#
            </p>
            <Textarea
                placeholder="Enter code snippet here"
                onChange={(e) => setCodeSnippet(e.target.value)}
                value=''
            />
             <p className="text-2xl text-center py-2">
                Python
            </p>
            <Textarea
                placeholder="Converted code snippet"
                value={convertedCodeSnippet}
                onChange={() => { }}
            />
            <Button onClick={convertCSharpToPython} text="Convert" />
        </section>
    )
}
