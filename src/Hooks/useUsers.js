import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsers = () => {
  const { data: users = [], isLoading, isError, refetch } = useQuery(["users"], async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`);
    return res.data;
  });

  return [users, refetch, isLoading, isError];
};

export default useUsers;
