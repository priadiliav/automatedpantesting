"use client";

import React, { useState } from "react";
import UrlField from "./UrlField";
import FileUploader from "./FileUploader";
import SubmitButton from "./SubmitButton";
import VulnerabilityList from "./VulnerabilityList";

const Form: React.FC = () => {
    const [url, setUrl] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [vulnerabilities, setVulnerabilities] = useState<any[]>([]);

    const handleSubmit = async () => {
        if (!url || !file) {
            setError("Both URL and file are required.");
            return;
        }

        setError("");
        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append("url", url);
            formData.append("file", file);

            const response = await fetch("/api/vulnerabilities", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            setVulnerabilities(data.vulnerabilities);
        } catch (err) {
            console.error(err);
            setError("Failed to process the request.");
        } finally {
            setIsLoading(false);
        }
    };

    if (vulnerabilities.length > 0) {
        return <VulnerabilityList vulnerabilities={vulnerabilities} />;
    }

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Create Request</h2>
            <UrlField
                label="URL"
                value={url}
                onChange={setUrl}
                placeholder="Enter URL"
            />
            <FileUploader onFileChange={setFile} />
            {error && <p className="text-sm text-red-500 mb-2">{error}</p>}
            <SubmitButton onClick={handleSubmit} disabled={!url || !file} />
            {isLoading && (
                <div className="mt-4 text-center text-gray-500">
                    <p>Processing... Please wait</p>
                </div>
            )}
        </div>
    );
};

export default Form;
