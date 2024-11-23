import { NextResponse } from "next/server";

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(req: Request) {
    const formData = await req.formData();
    const url = formData.get("url")?.toString() || "";
    const file = formData.get("file");

    console.log("Received URL:", url);
    console.log("Received File:", file);

    await delay(7000);

    const mockData = {
        vulnerabilities: [
            {
                id: "sql-injection",
                name: "SQL Injection",
                severity: "Critical",
                log: "SQL injection detected in parameter `user_id`.",
                description: "Allows attackers to manipulate SQL queries.",
                detected: "2024-11-23 10:00 AM",
                affectedUrl: "/login",
                exploitedRequests: 25,
                exploitExample:
                    'curl -X POST http://example.com/login -d "username=admin&password=anypassword"',
            },
            {
                id: "xss",
                name: "XSS",
                severity: "High",
                log: "Reflected XSS vulnerability in `search` parameter.",
                description: "Allows attackers to inject JavaScript code.",
                detected: "2024-11-23 10:30 AM",
                affectedUrl: "/search",
                exploitedRequests: 10,
                exploitExample:
                    'curl -X GET http://example.com/search?q="<script>alert(1)</script>"',
            },
        ],
    };

    return NextResponse.json(mockData);
}
