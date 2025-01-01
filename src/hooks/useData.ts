import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
            .then((response) => {
                setLoading(false);
                setData(response.data?.results)})
            .catch((error) => {
                
                if(error instanceof CanceledError) return;

                setError(error.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { data, error, isLoading };
}

export default useData