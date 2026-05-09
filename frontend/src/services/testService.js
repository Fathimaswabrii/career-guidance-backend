import axios from "axios";
import { getToken } from "../utils/token";

const API = "http://127.0.0.1:8000/api";

export const getQuestions = async () => {
  const token = getToken();
  return axios.get(`${API}/questions/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const submitTest = async (answers) => {
  const token = getToken();
  return axios.post(`${API}/submit-test/`, answers, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

   