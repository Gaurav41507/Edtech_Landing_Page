import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { State, City } from "country-state-city";
import { AiOutlineClose } from "react-icons/ai";
import { useInsertEnrolmentForm } from "../Services/apiHooks";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

const InternshipModal = ({ isOpen, onClose }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const mutation = useInsertEnrolmentForm();

  const [formError, setFormError] = useState("");

  useEffect(() => {
    const indianStates = State.getStatesOfCountry("IN");
    setStates(indianStates);
  }, []);

  useEffect(() => {
    if (selectedState) {
      const citiesList = City.getCitiesOfState("IN", selectedState);
      setCities(citiesList);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const internshipSchema = z.object({
  name: z.string().min(1, "Name is required"),
  contactNo: z.string().min(10, "Contact number is required"),
  email: z.string().email("Invalid email address"),
  collegeName: z.string().min(1, "College name is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  pincode: z
    .string()
    .regex(/^\d{6}$/, "Please enter a valid 6-digit pincode."),
  branch: z.string().min(1, "Branch is required"),
  courseName: z.string().min(1, "Course is required"),
  yearOfPassing: z
    .string()
    .regex(/^\d{4}$/, "Year must be a valid 4-digit year"),
});

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    const formData = new FormData(e.target);
    const stateObj = states.find((s) => s.isoCode === selectedState);

    const payload = {
  name: formData.get("name"),
  contactNo: phone,
  email: formData.get("email"),
  collegeName: formData.get("college_name"),
  state: stateObj?.name || selectedState,
  city: selectedCity,
  pincode: formData.get("pincode"),
  branch: formData.get("branch"),
  courseName: course,
  yearOfPassing: formData.get("year_of_passing"),
};

    const check = internshipSchema.safeParse(payload);
    if (!check.success) {
      const flatErrors = check.error.flatten().fieldErrors;
      const first = Object.values(flatErrors).flat()[0] || "Please check the form.";
      setFormError(first);
      toast.error(first);
      return;
    }

    console.log("Payload:", payload);

    mutation.mutate(payload, {
      onSuccess: () => {
        toast.success("✅ Internship form is submitted!");
        onClose();
      },
      onError: () => {
        toast.error("❌ Error submitting Internship form!");
      },
    });
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={() => !mutation.isLoading && onClose?.()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg"></div>

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6 z-10 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between bg-gradient-to-r from-[#F45E29] to-[#5A4BDA] text-white px-4 py-3 rounded-t-lg">
          <h2 className="text-xl font-semibold text-center flex-1">
            Internship Registration Form
          </h2>
          <button
            onClick={onClose}
            className={`ml-2 ${
              mutation.isLoading
                ? "opacity-50 cursor-not-allowed"
                : "text-red-600 hover:text-red-800"
            }`}
            disabled={mutation.isLoading}
          >
            <AiOutlineClose size={22} />
          </button>
        </div>

        {/* Inline error */}
        {formError && (
          <div className="mb-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded p-2">
            {formError}
          </div>
        )}

        <form className="space-y-4" noValidate onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              disabled={mutation.isLoading}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Contact No:
            </label>
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={setPhone}
              inputClass="!w-full !py-2 !pl-12 !pr-3 !border !rounded-md"
              buttonClass="!border !rounded-l-md !bg-white"
              containerClass="w-full"
              disabled={mutation.isLoading}
            />
            <input
              type="text"
              name="contact_no"
              value={phone}
              onChange={() => {}}
              hidden
            />
          </div>

          {/* Gmail */}
          <div>
            <label className="block text-sm font-medium mb-1">Gmail</label>
            <input
              type="email"
              name="email"
              disabled={mutation.isLoading}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
            />
          </div>

          {/* College Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              College Name
            </label>
            <input
              type="text"
              name="college_name"
              disabled={mutation.isLoading}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
            />
          </div>

          {/* State + City + Pincode */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <select
                value={selectedState}
                disabled={mutation.isLoading}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedCity("");
                }}
                className="w-full border rounded-md px-2 py-2 bg-white disabled:opacity-50"
              >
                <option value="">Select State</option>
                {states.map((s) => (
                  <option key={s.isoCode} value={s.isoCode}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <select
                value={selectedCity}
                disabled={!selectedState || mutation.isLoading}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full border rounded-md px-2 py-2 bg-white disabled:opacity-50"
              >
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={`${c.name}-${c.stateCode}`} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Pincode</label>
              <input
                type="text"
                name="pincode"
                disabled={mutation.isLoading}
                className="w-full border rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
              />
            </div>
          </div>

          {/* Branch/Course */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Branch/Course
            </label>
            <input
              type="text"
              name="branch"
              disabled={mutation.isLoading}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
            />
          </div>

          {/* Dropdown for Specialization */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Course Name
            </label>
            <select
              value={course}
              disabled={mutation.isLoading}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full border rounded-md px-3 py-2 bg-white disabled:opacity-50"
            >
              <option value="">Select Specialization</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Prompt Engineering">Prompt Engineering</option>
              <option value="Microsoft Dynamic 365">
                Microsoft Dynamic 365
              </option>
              <option value="Python">Python</option>
            </select>
          </div>

          {/* Year of Passing */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Year of Passing
            </label>
            <input
              type="text"
              name="year_of_passing"
              disabled={mutation.isLoading}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={mutation.isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mutation.isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>,
    document.body
  );
};

export default InternshipModal;
