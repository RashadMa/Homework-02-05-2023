import { baseURL } from "./baseURL";
import axios from "axios";

const instance = axios.create({
  baseURL: baseURL,
});
export const getCategories = () => {
  return instance.get();
};
