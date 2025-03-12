import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";
import { imageUpload } from "../../../utility";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const StudentUpdate = () => {
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();
  const studentData = useLoaderData();
  const navigate = useNavigate();
  const {
    validity,
    admissionDate,
    email,
    gender,
    date,
    rollNumber,
    className,
    name,
    _id,
  } = studentData;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const rollNumber = form.rollNumber.value;
    const admissionDate = form.admissionDate.value;
    const image = form.image.files[0];
    const className = form.className.value;
    const validity = form.validity.value;
    const gender = form.gender.value;
    const date = form.date.value;

    try {
      const imageUrl = await imageUpload(image);
      const formInfo = {
        validity,
        admissionDate,
        email,
        image: imageUrl,
        gender,
        date,
        rollNumber,
        className,
        name,
      };

      const res = await axiosSecure.patch(`/student/${_id}`, formInfo);
      if (res.data.modifiedCount > 0) {
        toast.success("Updated success");
        navigate("/dashboard/all-student-list");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <DasboardTitle role={role} action={"Student Updated"} />
      <Container className="max-w-3xl mx-auto p-6 rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          Student Update Form
        </h1>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">Roll Number</label>
              <input
                type="text"
                name="rollNumber"
                defaultValue={rollNumber}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600">Class</label>
              <input
                type="text"
                name="className"
                defaultValue={className}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">Gender</label>
              <select
                defaultValue={gender}
                name="gender"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600">Admission Date</label>
              <input
                type="date"
                name="admissionDate"
                defaultValue={admissionDate}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600">Date of Birth</label>
              <input
                type="date"
                name="date"
                defaultValue={date}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-600">Profile Image</label>
            <input
              type="file"
              name="image"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600">Validity</label>
            <input
              type="text"
              name="validity"
              defaultValue={validity}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Update Student
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default StudentUpdate;
