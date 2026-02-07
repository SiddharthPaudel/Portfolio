import React, { useState } from "react";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post(`${BACKEND_URL}/send-email`, formData);
      setStatus("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        Contact
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Feel free to reach out — I’m open to opportunities and collaborations
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">
        
        {/* Info */}
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            Email:{" "}
            <a
              href="mailto:psiddhartha62@email.com"
              className="text-purple-600 hover:underline"
            >
              psiddhartha62@email.com
            </a>
          </p>
          <p>Phone: +977 9849800636</p>
          <p>Location: Kathmandu, Nepal</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            className="w-full h-32 rounded-md border border-gray-300 px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full rounded-md border border-gray-900 py-3 text-sm font-medium
                       text-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            Send message
          </button>

          {status && (
            <p
              className={`text-sm mt-2 ${
                status.includes("sent")
                  ? "text-green-600"
                  : status.includes("Sending")
                  ? "text-gray-500"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
