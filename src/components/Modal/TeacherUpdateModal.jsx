import React from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { format } from "date-fns";
import { Fragment } from "react";
import { imageUpload } from "../../utility";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TeacherUpdateModal = ({ updateCloseModal, updateIsOpen, teacher }) => {
  const axiosSecure = useAxiosSecure();

  const updateTeacherMutation = useMutation({
    mutationFn: async (formInfo) => {
      const { data } = await axiosSecure.patch(
        `/teacher/${teacher._id}`,
        formInfo
      );
      console.log(data);
      return data;
    },
    onSuccess: () => {
      toast.success("Teacher updated successfully!");
      updateCloseModal();
    },
    onError: (error) => {
      console.error("Error updating teacher:", error);
      toast.error("Failed to update teacher!");
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
    const email = form.email.value;
    const joiningDate = form.joiningDate.value;
    const image = form.image.files[0];
    const day = form.day.value;
    const classTime = form.classTime.value;

    try {
      let imageUrl = teacher.image;
      if (image) {
        imageUrl = await imageUpload(image);
      }
      const formInfo = {
        name,
        admissionNumber,
        subject,
        date,
        gender,
        email,
        joiningDate,
        image: imageUrl,
        day,
        classTime,
      };

      updateTeacherMutation.mutate(formInfo); // trigger mutation
    } catch (error) {
      console.log(error);
    }
  };

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <Transition className="" appear show={updateIsOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={updateCloseModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white shadow-xl transition-all">
                <form onSubmit={handleSubmit}>
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-t-xl">
                    <img
                      src={teacher.image}
                      alt="Teacher"
                      className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md"
                    />
                    <DialogTitle
                      as="h3"
                      className="text-3xl font-bold text-center mt-4"
                    >
                      {teacher.name}
                    </DialogTitle>
                    <p className="text-center text-xl">{teacher.subject}</p>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Name:</label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={teacher.name}
                        className="border rounded-md p-1 w-2/3"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Image:</label>
                      <input
                        type="file"
                        name="image"
                        className="border rounded-md p-1 w-2/3"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Gender:</label>
                      <input
                        type="text"
                        name="gender"
                        defaultValue={teacher.gender}
                        className="border rounded-md p-1 w-2/3"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Joining ID:</label>
                      <input
                        type="text"
                        name="admissionNumber"
                        defaultValue={teacher.admissionNumber}
                        className="border rounded-md p-1 w-2/3"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Instructor of:</label>
                      <input
                        type="text"
                        name="subject"
                        defaultValue={teacher.subject}
                        className="border rounded-md p-1 w-2/3"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Email:</label>
                      <input
                        type="email"
                        name="email"
                        defaultValue={teacher.email}
                        className="border rounded-md p-1 w-2/3"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Date of Birth:</label>
                      <input
                        type="date"
                        name="date"
                        defaultValue={format(
                          new Date(teacher.date),
                          "yyyy-MM-dd"
                        )}
                        className="border rounded-md p-1 w-2/3"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Joining Date:</label>
                      <input
                        type="date"
                        name="joiningDate"
                        defaultValue={format(
                          new Date(teacher.joiningDate),
                          "yyyy-MM-dd"
                        )}
                        className="border rounded-md p-1 w-2/3"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Class Time:</label>
                      <input
                        type="text"
                        name="classTime"
                        defaultValue={teacher?.classTime}
                        className="border rounded-md p-1 w-2/3"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="block font-medium">Class Day</label>
                      <select
                        name="day"
                        className="border rounded-md p-1 w-2/3"
                      >
                        {daysOfWeek.map((day, index) => (
                          <option key={index} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-100 rounded-b-xl flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={updateCloseModal}
                      className="px-4 py-2 bg-gray-400 text-white rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TeacherUpdateModal;
