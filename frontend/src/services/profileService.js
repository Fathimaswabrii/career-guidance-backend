import axios from "axios";
import { getToken } from "../utils/token";

const API = "http://127.0.0.1:8000/api";

export const createProfile = async (profileData) => {
  const token = getToken();
  return axios.post(`${API}/profile/`, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProfile = async () => {
  const token = getToken();
  return axios.get(`${API}/profile/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = async (profileData) => {
  const token = getToken();
  return axios.put(`${API}/profile/`, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
