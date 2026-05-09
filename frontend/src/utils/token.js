// export const setToken = (token) => {
//   localStorage.setItem("access", token);
// };

// export const getToken = () => {
//   return localStorage.getItem("access");
// };

// export const logout = () => {
//   localStorage.removeItem("access");
// };

export const setToken = (token) => {
  localStorage.setItem("access", token);
};

export const getToken = () => {
  return localStorage.getItem("access");
};

export const logout = () => {
  localStorage.removeItem("access");
};

export const isAuthenticated = () => {
  const token = getToken();
  // Check if token exists and is valid (not empty, not "undefined", not "null")
  return token && token !== "undefined" && token !== "null" && token.trim() !== "";
};