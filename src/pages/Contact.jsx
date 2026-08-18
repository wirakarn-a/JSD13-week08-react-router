import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim() === "") return;
    console.log("Sending message:", message);
    setMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 text-center bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>

      <div className="text-left">
        <label className="block text-sm text-gray-600 mb-1">Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-600"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-sky-800 text-white px-4 py-2 rounded-md font-medium hover:bg-sky-600"
      >
        Send Message
      </button>
    </div>
  );
}