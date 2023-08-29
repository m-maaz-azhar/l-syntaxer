import Header from "@/components/Header";
import PLDetector from "@/sections/PLDetector";

export default function LanguageDetector() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-around px-24 py-10">
            <Header title="Code Language Detector" description="( C# / Python )" />
            <PLDetector />
        </main>
    )
}

export const metadata = {
    title: "Code Language Detector | L-Syntaxer",
    description: "Detect the programming language of a code snippet",
    keywords: "code, language, detect, syntax, l-syntaxer",
}