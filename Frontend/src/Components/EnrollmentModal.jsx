import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { State, City } from "country-state-city";
import { AiOutlineClose } from "react-icons/ai";

//  import your TanStack mutation hook
import { useInsertEnrolmentForm } from "../Services/apiHooks";

//  added imports
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";

const EnrollmentModal = ({ isOpen, onClose, courseTitle, title }) => {
  const [name, setName] = useState("");
  const [contact_no, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [college_name, setCollege] = useState("");
  const [college_pincode, setPincode] = useState("");
  const [branch_course_name, setBranch] = useState("");
  const [passed_out_year, setYear] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [formError, setFormError] = useState("");

  // TanStack mutation hook
  const { mutate, isPending, isSuccess, isError, error, data } =
    useInsertEnrolmentForm();

  //  added zod schema (non-destructive)
  const enrolmentSchema = z.object({
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

  // Load Indian states once
  useEffect(() => {
    const indianStates = State.getStatesOfCountry("IN");
    setStates(indianStates);
  }, []);

  // Load cities when state changes
  useEffect(() => {
    if (selectedState) {
      const citiesList = City.getCitiesOfState("IN", selectedState);
      setCities(citiesList);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  // added toast side-effects (does not replace your inline UI)
  useEffect(() => {
    if (isSuccess) {
      toast.success("Enrolment submitted successfully.");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || "Something went wrong while submitting.");
    }
  }, [isError, error]);

  if (!isOpen) return null;

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCollege("");
    setPincode("");
    setBranch("");
    setYear("");
    setSelectedState("");
    setSelectedCity("");
    setCities([]);
    setFormError("");
  };

  const handleEnrollmentSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    const stateObj = states.find((s) => s.isoCode === selectedState);

    const payload = {
      name,
      contactNo: contact_no,
      email,
      collegeName: college_name,
      state: stateObj?.name || selectedState,
      city: selectedCity,
      pincode: college_pincode,
      branch: branch_course_name,
      courseName: title || courseTitle || "General",
      yearOfPassing: passed_out_year,
    };

    // Zod validation
    const check = enrolmentSchema.safeParse(payload);

    if (!check.success) {
      const flatErrors = check.error.flatten().fieldErrors;
      const first =
        Object.values(flatErrors).flat()[0] || "Please check the form.";
      setFormError(first);
      toast.error(first);
      return;
    }

    mutate(payload, {
      onSuccess: () => {
        resetForm();
        onClose?.();
      },
      // onError handled globally in the hook; optionally add UI here too
    });
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={() => !isPending && onClose?.()}
    >
      {/* ✅ added toaster (non-invasive) */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg"></div>

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6 z-10 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between bg-gradient-to-r from-[#F45E29] to-[#5A4BDA] text-white px-4 py-3 rounded-t-lg">
          <h2 className="text-sm font-semibold text-center flex-1">
            Enroll now for{" "}
            <span className="text-xl font-bold">
              {title}
              
              {courseTitle}
            </span>
          </h2>
          <button
            onClick={onClose}
            className={`ml-2 ${
              isPending
                ? "opacity-50 cursor-not-allowed"
                : "text-red-600 hover:text-red-800"
            }`}
            disabled={isPending}
          >
            <AiOutlineClose size={22} />
          </button>
        </div>

        {/* Inline error & success */}
        {formError && (
          <div className="mb-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded p-2">
            {formError}
          </div>
        )}
        {isError && (
          <div className="mb-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded p-2">
            {error?.message || "Something went wrong while submitting."}
          </div>
        )}
        {isSuccess && (
          <div className="mb-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded p-2">
            Enrolment submitted successfully.
          </div>
        )}

        <form className="space-y-4" onSubmit={handleEnrollmentSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isPending}
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
              value={contact_no}
              onChange={setPhone}
              inputClass="!w-full !py-2 !pl-12 !pr-3 !border !rounded-md"
              buttonClass="!border !rounded-l-md !bg-white"
              containerClass="w-full"
              disabled={isPending}
              inputProps={{ required: true, name: "phone" }}
            />
          </div>

          {/* Gmail */}
          <div>
            <label className="block text-sm font-medium mb-1">Gmail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isPending}
              
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
              value={college_name}
              onChange={(e) => setCollege(e.target.value)}
              disabled={isPending}
              
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
            />
          </div>

          {/* State + City + Pincode */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedCity("");
                }}
                disabled={isPending}
                
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
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState || isPending}
                
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
                value={college_pincode}
                onChange={(e) =>
                  setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                disabled={isPending}
                
                inputMode="numeric"
                className="w-full border rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
              />
            </div>
          </div>

          {/* Branch */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Branch/Course
            </label>
            <input
              type="text"
              value={branch_course_name}
              onChange={(e) => setBranch(e.target.value)}
              disabled={isPending}
              
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
            />
          </div>

          {/* Year of Passing */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Year of Passing
            </label>
            <input
              type="text"
              value={passed_out_year}
              onChange={(e) =>
                setYear(e.target.value.replace(/\D/g, "").slice(0, 4))
              }
              disabled={isPending}
             
              inputMode="numeric"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default EnrollmentModal;
