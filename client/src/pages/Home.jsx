import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { user } = useContext(AppContext);

  return (
    <>
      <p>this is home</p>
      {user ? <p>welcome {user.userName}</p> : <p>Loading user..</p>}
    </>
  );
};

export default Home;
