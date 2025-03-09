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

const TeacherProfileModal = ({ closeModal, isOpen, teacher }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  bg-opacity-25" />
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
              <DialogPanel className="w-full max-w-sm transform overflow-hidden rounded-xl bg-white shadow-xl transition-all">
                <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-t-xl">
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

                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Name:</span>
                      <span>{teacher.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Gender:</span>
                      <span>{teacher.gender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Instructor of:</span>
                      <span>{teacher.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Joining ID:</span>
                      <span>{teacher.admissionNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Joining Date:</span>
                      <span>{format(new Date(teacher.joiningDate), "PP")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Email:</span>
                      <span>{teacher.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Date of Birth:</span>
                      <span>{format(new Date(teacher.date), "PP")}</span>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="text-center">
                    <p className="text-xl text-black">
                      School Name: Katkhal High school
                    </p>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TeacherProfileModal;
