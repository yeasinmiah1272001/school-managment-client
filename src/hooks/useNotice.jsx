import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useNotice = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: notice = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["notice"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/all-notice`);
      return res.data;
    },
  });

  return [notice, loading, refetch];
};

export default useNotice;
