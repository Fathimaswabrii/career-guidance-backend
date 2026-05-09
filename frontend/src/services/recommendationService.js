import axios from "axios";
import { getToken } from "../utils/token";

const API = "http://127.0.0.1:8000/api";

export const getResult = async () => {
  const token = getToken();
  return axios.get(`${API}/results/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getSkills = async (resultData) => {
  const token = getToken();
  return axios.post(`${API}/skill-recommend/`, resultData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getCourses = async (career) => {
  const token = getToken();
  return axios.post(`${API}/courses/`, { career }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getStreams = async (resultData) => {
  const token = getToken();
  return axios.post(`${API}/stream/`, { career: resultData.career }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
