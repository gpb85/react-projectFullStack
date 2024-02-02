import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { user } = useContext(AppContext);
  console.log(`${user}`);
  return (
    <>
      <p>this is home</p>
    </>
  );
};

export default Home;
