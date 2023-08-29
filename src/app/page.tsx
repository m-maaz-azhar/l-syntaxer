import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1 className="text-5xl font-bold">
          L-Syntaxer
        </h1>
        <Navbar />
      </div>
    </main>
  )
}

export const metadata = {
  title: "L-Syntaxer",
  description: "Detect language from code & convert code to another language",
  keywords: "code, language, detect, convert, syntax, l-syntaxer",
}