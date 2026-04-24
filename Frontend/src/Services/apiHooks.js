import { useMutation } from "@tanstack/react-query";
import { insertInternshipDetails , insertEnrolmentForm  } from "./Giaapi";

export const useInsertInternship = () => {
  return useMutation({
    mutationFn: insertInternshipDetails,
    onSuccess: (data) => {
      console.log("Internship details submitted successfully:", data);
    },
    onError: (error) => {
      console.error("Error submitting internship details:", error);
    },
  });
};


export const useInsertEnrolmentForm = () => {
  return useMutation({
    mutationFn: insertEnrolmentForm,
    onSuccess: (data) => {
      console.log("✅ Enrolment submitted successfully:", data);
    },
    onError: (error) => {
      console.error("❌ Error submitting enrolment:", error);
    },
  });
};




