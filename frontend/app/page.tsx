"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        AI Analytics Copilot
      </h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Uploading..." : "Upload File"}
      </button>

      {response && (
        <div className="mt-6 bg-gray-900 p-4 rounded">
          <p><strong>ID:</strong> {response.id}</p>
          <p><strong>Filename:</strong> {response.filename}</p>
          <p><strong>Size:</strong> {response.size} bytes</p>
        </div>
      )}
    </main>
  );
}
