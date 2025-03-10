import React from "react";
import { useQuery } from "@tanstack/react-query";
import useRole from "../../../hooks/useRole";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TeacherClassSchedule = () => {
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();

  const { data: timetable = [] } = useQuery({
    queryKey: ["class-schedules"],
    queryFn: async () => {
      const response = await axiosSecure.get("/class-shudels");
      return response.data;
    },
  });

  console.log(timetable);
  return (
    <div className="min-h-screen">
      <DasboardTitle role={role} action={"Class Schedules of Yearly"} />
      <Container className="p-4 shadow-lg rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Time</th>
                <th className="border border-gray-300 px-4 py-2">Day</th>
                <th className="border border-gray-300 px-4 py-2">Subject</th>
                <th className="border border-gray-300 px-4 py-2">Teacher</th>
                <th className="border border-gray-300 px-4 py-2">Class</th>
              </tr>
            </thead>
            <tbody>
              {timetable?.map((slot, index) => (
                <React.Fragment key={index}>
                  {slot.timetable.map((entry, subIndex) => (
                    <React.Fragment key={subIndex}>
                      {entry.schedule.map((item, itemIndex) => (
                        <tr
                          key={itemIndex}
                          className={itemIndex % 2 === 0 ? "" : ""}
                        >
                          {itemIndex === 0 && (
                            <td
                              rowSpan={entry.schedule.length}
                              className="border border-gray-300 px-4 py-2 font-medium text-black align-top"
                            >
                              {entry.time}
                            </td>
                          )}
                          <td className="border border-gray-300 px-4 py-2">
                            {item.day}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {item.subject}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {item.teacher}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {item.class}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default TeacherClassSchedule;
