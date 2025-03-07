import React from "react";
import useRole from "../../../hooks/useRole";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import FormInput from "../../../components/Form/FormInput";

const AddTeacher = () => {
  const [role] = useRole();
  const formFields = [
    { label: "Name", id: "name" },
    { label: "Admission Number", id: "admission-number" },
    { label: "Subject Name", id: "subject" },
    { label: "Date of Birth", id: "date-of-birth", type: "date" },
    { label: "Gender", id: "gender" },
    { label: "Photo", id: "photo", type: "file" },
    { label: "Email", id: "email", type: "email" },
    { label: "Joining Date", id: "admission-date", type: "date" },
    { label: "Father's Name", id: "fathers-name" },
  ];
  return (
    <div className="min-h-screen">
      <DasboardTitle role={role} action={"Add Student"} />
      <form className="p-8 rounded-lg shadow-md w-full max-w-3xl mx-auto bg-[#D9D9D9]/40 mt-3">
        <h1 className="text-2xl font-bold text-center mb-8">Add Teacher</h1>
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

export default AddTeacher;
