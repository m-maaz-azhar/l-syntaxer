import Header from "@/components/Header";
import CS2Py from "@/sections/CS2Py";

export default function CSharpToPython() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-around px-24 py-10">
            <Header title="C# to Python" />
            <CS2Py />
        </main>
    )
}

export const metadata = {
    title: "C# to Python | L-Syntaxer",
    description: "Convert C# code to Python",
    keywords: "c#, python, convert, code, syntax, l-syntaxer",
}