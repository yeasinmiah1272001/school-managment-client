import React from "react";

const InfoRow = ({ label, value }) => {
  return (
    <>
      <div className="text-gray-700 font-medium">{label}</div>
      <div className="text-gray-800">{value}</div>
    </>
  );
};

export default InfoRow;
