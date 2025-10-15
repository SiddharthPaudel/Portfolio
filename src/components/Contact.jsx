import React, { useState } from "react";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_API_URL ;

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
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      // Hide message after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
      
      // Hide message after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 mt-14 bg-white p-6 rounded-xl shadow-sm border">
      <h2 className="text-2xl font-semibold">Contact</h2>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Contact Info */}
        <div>
          <p className="text-sm text-gray-700">
            Email: <a href="mailto:psiddhartha62@email.com" className="text-primary">psiddhartha62@email.com</a>
          </p>
          <p className="mt-2 text-sm text-gray-700">Phone: +977 9849800636</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            placeholder="Your name"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            placeholder="Your email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded h-28"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Send
          </button>

          {/* Status message */}
          {status && <p className="text-sm mt-2 text-gray-600">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
