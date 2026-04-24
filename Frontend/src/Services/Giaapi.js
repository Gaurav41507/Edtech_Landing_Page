import api from "./Instancesapi";

export const insertInternshipDetails = async (internshipData) => {
  const response = await api.post(
    "/insertinternship_details",
    internshipData
  );
  return response.data;
};

// export const insertEnrolmentForm = async (formData) => {
//   const response = await api.post(
//     "/insertenrolment_form",
//     formData
//   );
//   return response.data;
// };

export const insertEnrolmentForm = async (formData) => {
  const response = await api.post("/", formData);
  return response.data;
};