import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useServices = () => {
    const { data: services = [], refetch } = useQuery(["services"], async () => {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/services`);
        return res.data;
    });

    return [services, refetch];
};

export default useServices;