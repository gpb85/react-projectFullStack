import { createContext } from "react";
import { baseURL } from "../../config/api.js";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const register = async (
    userName,
    firstName,
    lastName,
    email,
    birthday,
    password
  ) => {
    try {
      const response = await axios.post(baseURL + "/users/signup", {
        userName,
        firstName,
        lastName,
        email,
        birthday,
        password,
      });
      if (response.data.success) {
        console.log("User is created", response.data.newUser);
      }
    } catch (error) {}
  };
  return (
    <AppContext.Provider value={{ register }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
