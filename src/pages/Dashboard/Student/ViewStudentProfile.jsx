import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";
import { Link, useLoaderData } from "react-router-dom";
import InfoRow from "../../../components/Dashboard/InfoRow";

const ViewStudentProfile = () => {
  const [role] = useRole();
  const allStudentData = useLoaderData();

  return (
    <div className="py-6">
      <DasboardTitle role={role} action={"View Student Profile"} />
      <Container className="p-6">
        <div className="flex flex-col md:flex-row w-full max-w-3xl mx-auto  p-4 rounded-lg">
          {/* Left Section with Image and Buttons */}
          <div className="flex flex-col items-center space-y-4 md:w-1/3 p-2">
            {/* Student Image */}
            <div className="rounded-full bg-yellow-50 w-40 h-40 overflow-hidden border-4 border-white">
              <img
                src={allStudentData.image}
                alt="Student Photo"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Buttons */}
            <div className="w-full space-y-3 mt-4">
              <button className="w-full py-3 bg-indigo-900 text-white font-medium rounded hover:bg-indigo-800 transition">
                <Link to={"/dashboard/student-result"}>Exam results</Link>
              </button>
              <button className="w-full py-3 bg-indigo-900 text-white font-medium rounded hover:bg-indigo-800 transition">
                <Link to={"/dashboard/student-routin"}>Class Routin</Link>
              </button>
            </div>
          </div>

          {/* Right Section with Student Information */}
          <div className="md:w-2/3 bg-[#CDF3F5] rounded p-4 mt-4 md:mt-0">
            <div className="grid grid-cols-2 gap-y-3">
              {/* Student Information Rows */}
              <InfoRow label="Name:" value={allStudentData.name} />
              <InfoRow label="Roll Number:" value={allStudentData.rollNumber} />
              <InfoRow
                label="Admission number:"
                value={allStudentData.admissionDate}
              />
              <InfoRow label="Grade:" value="Grade 06" />
              <InfoRow label="Class:" value={allStudentData?.className} />
              <InfoRow label="Date of birth:" value={allStudentData.date} />
              <InfoRow label="Gender:" value={allStudentData.gender} />
              <InfoRow label="Validity:" value={allStudentData.validity} />
              <InfoRow label="Religion:" value="Islam" />
              <InfoRow
                label="Admission date:"
                value={allStudentData.admissionDate}
              />
              <InfoRow
                label="Father's name:"
                value={allStudentData.fatherName}
              />
              <InfoRow label="Father Occupation:" value="Doctor" />
              <InfoRow label="Mother's name:" value="Ishanka samaranayake" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ViewStudentProfile;
