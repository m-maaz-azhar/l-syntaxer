import Header from "@/components/Header";
import Py2CS from "@/sections/Py2CS";

export default function PythonToCSharp() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-around px-24 py-10">
            <Header title="Python to C#" />
            <Py2CS />
        </main>
    )
}

export const metadata = {
    title: "Python to C# | L-Syntaxer",
    description: "Convert Python code to C#",
    keywords: "python, c#, convert, code, syntax, l-syntaxer",
}
