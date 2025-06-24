"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("✅ Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        toast.error("❌ Failed to send message.");
      }
    } catch (err) {
      console.error("Send error:", err);
      toast.error("⚠️ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 text-white bg-[#0c1222] text-center">
      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-300 mb-8">
        You can email me at{" "}
        <a
          href="mailto:tashinamgyel377@gmail.com"
          className="text-blue-400 underline"
        >
          tashinamgyel377@gmail.com
        </a>{" "}
        or use this form.
      </p>

      <form
        className="max-w-xl mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Your email"
          className="bg-[#1a2332] border border-gray-600 px-4 py-3 rounded-lg text-white placeholder-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Your message"
          maxLength={5000}
          rows={8}
          className="bg-[#1a2332] border border-gray-600 px-4 py-3 rounded-lg w-full text-white placeholder-gray-400 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#1f2937] hover:bg-[#2c3a4f] px-6 py-3 rounded-full flex items-center justify-center gap-2 text-white transition duration-300"
        >
          {loading ? "Sending..." : "Submit"}
          <SendHorizonal className="w-4 h-4" />
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
