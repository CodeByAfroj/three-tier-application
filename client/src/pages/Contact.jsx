"use client";
import { useState } from "react";
import axios from "axios";
import { TbMailForward } from "react-icons/tb";
import { isValidEmail } from "../utils/check-email";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";


function Contact() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    }

    if (!isValidEmail(userInput.email)) {
      setError((prev) => ({ ...prev, email: true }));
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(
        `${process.env.VITE_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Get in Touch
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Have a question, feedback, or collaboration idea?  
          Drop a message and I’ll get back to you.
        </p>
      </div>

      {/* Card */}
      <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 shadow-xl">
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="text-sm text-slate-300 mb-2 block">
              Your Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={userInput.name}
                onChange={(e) =>
                  setUserInput({ ...userInput, name: e.target.value })
                }
                onBlur={checkRequired}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-slate-300 mb-2 block">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                value={userInput.email}
                onChange={(e) =>
                  setUserInput({ ...userInput, email: e.target.value })
                }
                onBlur={() =>
                  setError((prev) => ({
                    ...prev,
                    email: !isValidEmail(userInput.email),
                  }))
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                placeholder="you@example.com"
              />
            </div>
            {error.email && (
              <p className="text-xs text-red-400 mt-1">
                Please enter a valid email address
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-slate-300 mb-2 block">
              Your Message
            </label>
            <div className="relative">
              <FiMessageSquare className="absolute left-4 top-4 text-slate-500" />
              <textarea
                rows="5"
                value={userInput.message}
                onChange={(e) =>
                  setUserInput({ ...userInput, message: e.target.value })
                }
                onBlur={checkRequired}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
                placeholder="Write your message here..."
              />
            </div>
          </div>

          {/* Errors */}
          {error.required && (
            <p className="text-sm text-red-400 text-center">
              All fields are required
            </p>
          )}

          {/* Button */}
          <div className="pt-4 text-center">
            <button
              onClick={handleSendMail}
              disabled={isLoading}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-10 py-3 rounded-full font-semibold transition-all duration-200"
            >
              {isLoading ? "Sending..." : "Send Message"}
              <TbMailForward size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
