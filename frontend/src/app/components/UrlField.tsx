import React from "react";

interface UrlFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const UrlField: React.FC<UrlFieldProps> = ({ label, value, onChange, placeholder }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type="url"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm text-black" // Додано text-black
            />
        </div>
    );
};

export default UrlField;
