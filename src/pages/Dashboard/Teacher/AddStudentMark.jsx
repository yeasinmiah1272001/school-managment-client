import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddStudentMark = () => {
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();

  const handleAddSubjectMark = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Extract individual fields from the form
    const classSelecteds = form.classSelects.value;
    const name = form.name.value;
    const subjectSelect = form.subjectSelect.value;
    const addmark = form.addmark.value; // This is a string by default

    // Ensure addmark is converted to a number
    const allInfo = {
      classSelecteds,
      addmark: parseInt(addmark), // Ensure it's an integer
      subjectSelect,
      name,
    };

    try {
      // Send a PUT request to update the assignment for students
      const res = await axiosSecure.put("/all-student", allInfo);

      if (res.data.message === "Mark and subject added successfully!") {
        toast.success("Mark and subject added successfully");
      } else {
        toast.error(
          res.data.message || "No matching student found or no changes made"
        );
      }
    } catch (error) {
      console.error("Error adding student mark:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <DasboardTitle role={role} action={"Student Mark page"} />
      <Container className="p-6 rounded-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Add Student Mark
        </h1>
        <form onSubmit={handleAddSubjectMark} className="space-y-4">
          {/* Class Selection */}
          <div>
            <label className="block text-lg font-medium">Select Class</label>
            <select
              name="classSelects"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">All Classes</option>
              <option value="Six">Six</option>
              <option value="Seven">Seven</option>
              <option value="Eight">Eight</option>
              <option value="Nine">Nine</option>
              <option value="Ten">Ten</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium">Select Subject</label>
            <select
              name="subjectSelect"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Subject Name</option>
              <option value="Bangla">Bangla</option>
              <option value="English">English</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Biology">Biology</option>
              <option value="Chemistry">Chemistry</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium">
              Add Student Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Student Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">
              Add subject Mark
            </label>
            <input
              type="text"
              name="addmark"
              placeholder="Enter Subject Mark"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all"
            >
              Add Mark
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddStudentMark;
