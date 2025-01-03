import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependences?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((response) => {
          setLoading(false);
          setData(response.data?.results);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;

          setError(error.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    dependences ? [...dependences] : []
  );

  return { data, error, isLoading };
};

export default useData;
