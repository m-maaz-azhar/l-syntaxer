import React from 'react';

interface TextareaProps {
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({ value, onChange, placeholder }: TextareaProps) {
    return (
        <textarea
            className="w-full h-96 p-2 text-black"
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={value}
        />
    )
}
