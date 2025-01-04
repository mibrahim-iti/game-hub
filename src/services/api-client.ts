import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axioxInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a78453b59fcf4c74863094ff95d9598f",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axioxInstance.get<FetchResponse<T>>(this.endpoint, config).then((response) => response.data);
  };
}

export default APIClient;
