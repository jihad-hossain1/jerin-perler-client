import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UserCollection = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axios.get("/users");
    return res.data;
  });
  return <div></div>;
};

export default UserCollection;
