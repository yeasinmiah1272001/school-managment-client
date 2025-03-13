import React from "react";
import Container from "../../../components/Container";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import useRole from "../../../hooks/useRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const Assignment = () => {
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Extract individual fields from the form
    const classSelected = form.classSelect.value;
    const assignmentName = form.assignmentName.value;
    const assignmentDetails = form.assignment.value;
    const submitDate = form.submitDate.value;
    const lastDate = form.lastDate.value;

    const allInfo = {
      classSelected,
      assignmentDetails,
      assignmentName,
      submitDate,
      lastDate,
    };

    try {
      // Send a PATCH request to update the assignment for students
      const res = await axiosSecure.patch("/all-student", allInfo);

      if (res.data.success) {
        toast.success("Assignment Updated Successfully!");
        form.reset(); // Reset the form after successful submission
      } else {
        toast.error("Failed to update assignment!");
      }
    } catch (error) {
      console.error("Error updating assignment:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <DasboardTitle role={role} action={"All Assignment Field"} />
      <Container className="p-6 rounded-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">Assignment</h1>
        <form onSubmit={handleAddAssignment} className="space-y-4">
          {/* Class Selection */}
          <div>
            <label className="block text-lg font-medium">Select Class</label>
            <select
              name="classSelect"
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

          {/* Assignment Name */}
          <div>
            <label className="block text-lg font-medium">
              Assignment Topic
            </label>
            <input
              type="text"
              name="assignmentName"
              placeholder="Enter Assignment Topic"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Assignment Details */}
          <div>
            <label className="block text-lg font-medium">
              Assignment Details
            </label>
            <textarea
              name="assignment"
              placeholder="Enter Assignment Details"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              required
            ></textarea>
          </div>

          {/* Submission Date */}
          <div>
            <label className="block text-lg font-medium">Submission Date</label>
            <input
              type="date"
              name="submitDate"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Last Date */}
          <div>
            <label className="block text-lg font-medium">Last Date</label>
            <input
              type="date"
              name="lastDate"
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
              Add Assignment
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Assignment;
