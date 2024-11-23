import React from "react";

interface FileUploaderProps {
    onFileChange: (file: File | null) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Upload File</label>
            <input
                type="file"
                onChange={(e) => onFileChange(e.target.files?.[0] || null)}
                className="mt-1 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:bg-pink-500 file:text-white hover:file:bg-pink-600"
            />
        </div>
    );
};

export default FileUploader;
