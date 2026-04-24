import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import toast from "react-hot-toast";

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [form, setForm] = useState({
    user_name: "",
    email: "",
    password: "",
    user_mobile: "",
    dob: "",
    course_of_study: "",
    // profile_image: "", // string instead of file
    is_verified: 0,
  });

  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // const handleSubmit = async (e) => {

  //   e.preventDefault();
  //   setError(null);

  //   try {
  //     const response = await axios.post(
  //       "https://experiencepavilion.com/api/v1/classuser/login/signup",
  //       form
  //     );

  //     console.log("Signup successful:", response.data);
  //     onClose();
  //     toast.success("✅ Signup successful! Please log in.");
  //   } catch (err) {
  //     setError(
  //       err.response?.data?.message || "Signup failed. Please try again."
  //     );
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🚧🏗️⚠️ This feature is currently in development process.");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create your account">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <div>
          <label className="mb-1 block text-sm">Name</label>
          <input
            name="user_name"
            value={form.user_name}
            onChange={handleChange}
            className="w-full rounded-md border border-white/10 bg-[#443f80] px-3 py-2 outline-none placeholder-white/60"
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md border border-white/10 bg-[#443f80] px-3 py-2 outline-none placeholder-white/60"
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm">Phone No</label>
          <input
            type="text"
            name="user_mobile"
            value={form.user_mobile}
            onChange={handleChange}
            className="w-full rounded-md border border-white/10 bg-[#443f80] px-3 py-2 outline-none placeholder-white/60"
            placeholder="Enter Your Phone No."
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="w-full rounded-md border border-white/10 bg-[#443f80] px-3 py-2 outline-none placeholder-white/60"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm">Course of Study</label>
          <input
            type="text"
            name="course_of_study"
            value={form.course_of_study}
            onChange={handleChange}
            className="w-full rounded-md border border-white/10 bg-[#443f80] px-3 py-2 outline-none placeholder-white/60"
            placeholder="Computer Science"
            required
          />
        </div>

        {/* <div>
          <label className="mb-1 block text-sm">Profile Image (URL)</label>
          <input
            type="text"
            name="profile_image"
            value={form.profile_image}
            onChange={handleChange}
            className="w-full rounded-md border border-white/10 bg-[#443f80] px-3 py-2 outline-none placeholder-white/60"
            placeholder="profile1.jpg"
          />
        </div> */}

        <div>
          <label className="mb-1 block text-sm">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-md border border-white/10 bg-[#443f80] px-3 py-2 outline-none placeholder-white/60"
            placeholder="Enter Your Password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-orange-500 px-4 py-2 font-medium hover:bg-orange-600"
        >
          Sign Up
        </button>

        <p className="pt-1 text-center text-sm text-white/80">
          Already have an account?{" "}
          <button
            type="button"
            className="text-orange-400 underline underline-offset-4 hover:text-orange-300"
            onClick={() => {
              onClose();
              onSwitchToLogin?.();
            }}
          >
            Log in
          </button>
        </p>
      </form>
    </Modal>
  );
};

export default SignupModal;
