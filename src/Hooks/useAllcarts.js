import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllcarts = () => {
    const { data: cartsAll = [], refetch } = useQuery(["cartsAll"], async () => {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/cartsAll`);
        return res.data;
    });

    return [cartsAll, refetch];
};

export default useAllcarts;