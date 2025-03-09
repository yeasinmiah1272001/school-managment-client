import React from "react";
import useRole from "../../../hooks/useRole";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import FormInput from "../../../components/Form/FormInput";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import { imageUpload } from "../../../utility";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const [role, isPending] = useRole();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const formFields = [
    { label: "Name", name: "name" },
    { label: "Admission Number", name: "admissionNumber" },
    { label: "Subject Name", name: "subject" },
    { label: "Date of Birth", name: "date", type: "date" },
    { label: "Gender", name: "gender" },
    { label: "Photo", name: "image", type: "file" },
    { label: "Email", name: "email", type: "email" },
    { label: "Joining Date", name: "joiningDate", type: "date" },
    { label: "Father's Name", name: "fatherName" },
  ];

  // Define the mutation outside handleSubmit
  const mutation = useMutation({
    mutationFn: async (formInfo) => {
      const { data } = await axiosSecure.post("/add-teacher", formInfo);
      console.log("API Response:", data);
      return data;
    },
    onSuccess: async () => {
      toast.success("Teacher Added succesfull");
      navigate("/dashboard/all-teacher-list");
    },
    onError: async () => {
      toast.error(error);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Access each field individually
    const name = form.name.value;
    const admissionNumber = form.admissionNumber.value;
    const subject = form.subject.value;
    const date = form.date.value;
    const gender = form.gender.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const joiningDate = form.joiningDate.value;
    const fatherName = form.fatherName.value;

    // Use mutation to submit data
    try {
      // Prepare form data
      const imageUrl = await imageUpload(image);

      const formInfo = {
        name,
        admissionNumber,
        subject,
        date,
        gender,
        image: imageUrl,
        email,
        joiningDate,
        fatherName,
      };

      await mutation.mutateAsync(formInfo);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (isPending) return <span>Loading</span>;

  return (
    <div className="min-h-screen">
      <DasboardTitle role={role} action="Add Teacher" />
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-lg shadow-md w-full max-w-3xl mx-auto bg-[#D9D9D9]/40 mt-3"
      >
        <h1 className="text-2xl font-bold text-center mb-8">Add Teacher</h1>
        <div className="space-y-4">
          {formFields.map((field, index) => (
            <FormInput
              key={index}
              label={field.label}
              name={field.name}
              type={field.type || "text"}
              placeholder={field.label}
            />
          ))}
        </div>
        <div className="bg-indigo-500 hover:bg-gray-600 duration-300 w-1/2 mx-auto mt-3 rounded-full">
          <button type="submit" className="text-white p-1 rounded-full w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
