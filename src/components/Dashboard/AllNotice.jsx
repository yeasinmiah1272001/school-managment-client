import React from "react";
import useRole from "../../hooks/useRole";
import { FaExclamationCircle } from "react-icons/fa";
import DasboardTitle from "./DasboardTitle";
import Container from "../Container";
import { useLoaderData, useParams } from "react-router-dom";

const AllNotice = () => {
  const [role] = useRole();
  const details = useLoaderData();

  return (
    <div>
      <DasboardTitle role={role} action={"All Notice Here"} />
      <Container className="">
        <div className="max-w-3xl mx-auto my-10 p-6 bg-[#CDF3F5] shadow-md rounded-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold underline mb-5 flex items-center justify-center">
              <FaExclamationCircle className="mr-2 text-gray-700" />
              Notice
            </h1>
          </div>

          <div className="text-xl font-semibold leading-relaxed mb-8">
            {details.title}
          </div>

          <div className="text-xl mb-10">
            <p>{details.description}</p>
          </div>

          <div className="text-right mt-12">
            <div className="mb-2">Date: 21/02/2025</div>
            <div className="font-bold text-lg">Principal</div>
            <div className="text-gray-700">
              Katkhal High School
              <br />
              Katkhal - 700 033
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllNotice;
