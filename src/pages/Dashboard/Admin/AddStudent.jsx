import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import useRole from "../../../hooks/useRole";
import FormInput from "../../../components/Form/FormInput";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { imageUpload } from "../../../utility";
import toast from "react-hot-toast";

const AddStudent = () => {
  const [role, isPending] = useRole();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // Define form fields dynamically
  const formFields = [
    { label: "Name", id: "name" },
    { label: "Roll Number", id: "rollNumber" },
    { label: "Class Name", id: "class" },
    { label: "Date of Birth", id: "date-of-birth", type: "date" },
    { label: "Gender", id: "gender" },
    { label: "Email", id: "email", type: "email" },
    { label: "Photo", id: "photo", type: "file" },
    { label: "Admission Date", id: "admission-date", type: "date" },
    { label: "Validity", id: "validaty" }, // corrected 'validaty' to 'validity'
    { label: "Father's Name", id: "fathers-name" },
  ];

  const mutation = useMutation({
    mutationFn: async (formInfo) => {
      const { data } = await axiosSecure.post("/all-student", formInfo);
      console.log("API Response:", data);
      return data;
    },
    onSuccess: async () => {
      toast.success("Student Added successfully");
      navigate("/dashboard/all-student-list");
    },
    onError: async (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Access each field individually
    const name = form.name.value;
    const rollNumber = form.rollNumber.value;
    const className = form.class.value;
    const date = form["date-of-birth"].value;
    const gender = form.gender.value;
    const image = form.photo.files[0]; // corrected to match the input's id
    const email = form.email.value;
    const admissionDate = form["admission-date"].value;
    const fatherName = form["fathers-name"].value;
    const validity = form.validaty.value; // corrected 'validaty' to 'validity'

    // Use mutation to submit data
    try {
      // Prepare form data
      const imageUrl = await imageUpload(image);

      const formInfo = {
        name,
        rollNumber, // corrected 'admissionNumber' to 'rollNumber'
        date,
        className,
        gender,
        image: imageUrl,
        email,
        admissionDate,
        fatherName,
        validity, // corrected 'validaty' to 'validity'
      };
      console.log(formInfo);

      await mutation.mutateAsync(formInfo);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (isPending) return <span>Loading</span>;

  return (
    <div className="min-h-screen">
      <DasboardTitle role={role} action={"Add Student"} />
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-lg shadow-md w-full max-w-3xl mx-auto bg-[#D9D9D9]/40 mt-3"
      >
        <h1 className="text-2xl font-bold text-center mb-8">
          Add Student Details
        </h1>
        <div className="space-y-4">
          {formFields.map((field, index) => (
            <FormInput
              key={index}
              label={field.label}
              id={field.id}
              placeholder={field.label}
              type={field.type || "text"}
            />
          ))}
        </div>
        <div className="bg-indigo-500 hover:bg-gray-600 duration-300 w-1/2 justify-center text-center items-center mx-auto mt-3 rounded-full">
          <button type="submit" className="text-white p-1 rounded-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
