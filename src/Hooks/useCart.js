import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    // const { user, loading } = useAuth();

    const { refetch, data: carts = [] } = useQuery({
        queryKey: ["carts", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/carts?email=${user?.email}`);
            // console.log("res from axios", res);
            return res.data;
        },
    });

    return [carts, refetch];
};
export default useCart;