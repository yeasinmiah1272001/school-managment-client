import React, { useState } from "react";
import useRole from "../../../hooks/useRole";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { imageUpload } from "../../../utility";
import toast from "react-hot-toast";

const AddAllNotice = () => {
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();

  const mutation = useMutation({
    mutationFn: async (formInfo) => {
      const { data } = await axiosSecure.post("/add-notice", formInfo);
      console.log("API Response:", data);
      return data;
    },
    onSuccess: async () => {
      toast.success("Notice Added successfully");
    },
    onError: async (error) => {
      toast.error(error.message);
    },
  });

  const handleNotice = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;

    try {
      const formInfo = { title, description };

      await mutation.mutateAsync(formInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" min-h-screen">
      <DasboardTitle role={role} action={"Notice"} />
      <Container className="mt-8">
        <h1 className="text-3xl font-semibold text-gray-700 mb-6">
          Add Notice
        </h1>

        <form
          onSubmit={handleNotice}
          className=" p-6 rounded-lg shadow-lg mr-4"
        >
          {/* Notice Title */}
          <div className="mb-4">
            <label
              htmlFor="noticeTitle"
              className="block text-lg font-medium mb-2"
            >
              Notice Title
            </label>
            <input
              type="text"
              id="noticeTitle"
              name="title"
              placeholder="Enter notice title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">
              Notice Description
            </label>
            <textarea
              name="description"
              placeholder="Enter notice description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit Notice
          </button>
        </form>
      </Container>
    </div>
  );
};

export default AddAllNotice;
