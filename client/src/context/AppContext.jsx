import { createContext, useState } from "react";
import { baseURL } from "../config/api.js";
import axios from "../config/axiosAuth.js";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
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

  const signIn = async (email, password) => {
    try {
      const response = await axios.post(baseURL + "/users/signin", {
        email,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setUser(response.data.user);
        console.log("User logged in", response.data);
        navigate("/contact");
        // window.location.replace("/home"); κάνει reload τη σελίδα πριν σε πάει εκεί ,ενώ το navigate σε πάει απλά.
      }
    } catch (error) {}
  };

  return (
    <AppContext.Provider value={{ register, signIn, user }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
