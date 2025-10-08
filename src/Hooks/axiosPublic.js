
import axios from "axios";

const useAxiosPublic = () => {
  const instance = axios.create({
    baseURL: "https://protfolio-server-jade.vercel.app",
  });

  return instance;
};

export default useAxiosPublic;
