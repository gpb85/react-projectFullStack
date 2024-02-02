import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const About = () => {
  const { user } = useContext(AppContext);
  console.log(`${user}`);
  return (
    <>
      <p>this is about</p>
    </>
  );
};

export default About;
