'use client';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import React, { useState } from 'react'

export default function PLDetector() {

    const [codeSnippet, setCodeSnippet] = useState('')
    const [language, setLanguage] = useState('')

    function detectLanguage() {
        // Define regular expressions for common syntax patterns
        const patterns = [
            { name: 'C#', pattern: /\busing\s+\w+(\.\w+)*\s*;\s*|class\s+\w+\s*(<\w+\s*,\s*\w+>)?\s*{|public\s+(?:static\s+)?(?:async\s+)?(?:\w+\s+)?\w+\s+\w+\s*\(.*\)\s*{|int\s+\w+\s*=\s*\d+\s*;|Console\.WriteLine\(.*\)\s*;/ },
            { name: 'Python', pattern: /\bimport\s+\w+(\s+as\s+\w+)?\s*|def\s+\w+\s*\(.*\)\s*:\s*|for\s+\w+\s+in\s+\w+\s*:\s*|if\s+\w+\s*:\s*|print\(.*\)\s*|[\w\s]*=[\s\w\d"']+\s*|class\s+\w+\s*:/ },
        ];

        // Try to match each pattern against the code snippet
        for (const lang of patterns) {
            if (lang.pattern.test(codeSnippet)) {
                setLanguage(lang.name);
                return;
            }
        }

        // If no matches found, return 'Unknown'
        setLanguage('Invalid Code Snippet');
    }

    return (
        <section className='w-full text-center'>
            <Textarea
                placeholder="Enter code snippet here"
                value=""
                onChange={(e) => setCodeSnippet(e.target.value)}
            />
            {language && (
                <div className="text-2xl">
                    <span className="font-bold">Detected Language:</span> {language}
                </div>
            )}
            <Button onClick={detectLanguage} text="Detect" />
        </section>
    )
}
