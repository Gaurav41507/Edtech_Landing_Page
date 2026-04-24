import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import toast from "react-hot-toast";

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
   alert("🚧🏗️⚠️ This feature is currently in development process.");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Welcome back">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md border border-white/10 bg-[#443f80] px-3 py-2 outline-none placeholder-white/60"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-md border border-white/10 bg-[#443f80] px-3 py-2 outline-none placeholder-white/60"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-orange-500 px-4 py-2 font-medium hover:bg-orange-600 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="flex items-center justify-between text-sm text-white/80">
          <button type="button" className="hover:text-white/95">
            Forgot password?
          </button>
          <button
            type="button"
            className="text-orange-400 underline underline-offset-4 hover:text-orange-300"
            onClick={() => {
              onClose();
              onSwitchToSignup?.();
            }}
          >
            Create account
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginModal;
