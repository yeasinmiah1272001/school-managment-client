import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: student = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["student"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/all-student`);
      return res.data;
    },
  });

  return [student, loading, refetch];
};

export default useStudent;
