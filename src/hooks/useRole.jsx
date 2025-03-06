import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();

  const { data: role, isPending } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`);
      console.log("data", data.role);
      return data.role;
    },
  });
  return [role, isPending];
};

export default useRole;
