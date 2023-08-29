import React from 'react'
import Navbar from './Navbar'

interface HeaderProps {
    title: string;
    description?: string | undefined;
}

export default function Header({ title, description }: HeaderProps) {
    return (
        <header>
            <Navbar />
            <h1 className="text-4xl font-bold py-10 text-center">
                {title}
            </h1>
            {description && (
                <p className="text-2xl text-center">
                    {description}
                </p>
            )}
        </header>
    )
}
