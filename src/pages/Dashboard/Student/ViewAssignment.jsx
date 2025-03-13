import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";
import { useLoaderData } from "react-router-dom";

const ViewAssignment = () => {
  const [role] = useRole();
  const allAssignment = useLoaderData();
  console.log("assignment", allAssignment);

  return (
    <div className="min-h-screen  py-10">
      <DasboardTitle role={role} action={"Assignment Page"} />
      <Container>
        <div className="max-w-3xl mx-auto  shadow-lg rounded-2xl p-6">
          <h1 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">
            Assignment Name: {allAssignment.assignmentName}
          </h1>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Topic:</span>{" "}
            {allAssignment.assignmentDetails}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Submission Date:</span>{" "}
            {allAssignment.submitDate}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Last Date:</span>{" "}
            {allAssignment.lastDate}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ViewAssignment;
