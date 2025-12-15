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
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 mt-20 bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Contact
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-gray-700 text-sm">
            Email:{" "}
            <a
              href="mailto:psiddhartha62@email.com"
              className="text-gradient font-medium"
              style={{ background: "linear-gradient(to right, #7F00FF, #E100FF)", WebkitBackgroundClip: "text", color: "transparent" }}
            >
              psiddhartha62@email.com
            </a>
          </p>
          <p className="text-gray-700 text-sm">Phone: +977 9849800636</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Send Message
          </button>

          {/* Status message */}
          {status && (
            <p
              className={`text-sm mt-2 ${
                status.includes("✅") ? "text-green-600" : "text-red-600"
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
