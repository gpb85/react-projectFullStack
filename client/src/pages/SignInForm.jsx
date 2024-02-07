import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemeber] = useState("");
  const { signIn } = useContext(AppContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRemeber = (e) => {
    setRemeber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //αποτρέπει τη προεπιλεγμένη συμεριφορά της φόρμας
    //Λαμβάνει τα στοιχέια από τα πεδία της φόρμας
    signIn(email, password);
    console.log(`Username: ${email} | Password: ${password}`);
  };

  return (
    <>
      <div className="loginForm">
        <span>
          <h3>Sing in!</h3>
        </span>
        <form action="/sendData" method="GET" onSubmit={handleSubmit}>
          <label>email</label>
          <input type="email" onChange={handleEmail} minLength={5} required />
          '(*)'
          <br />
          <label htmlFor="txtPassword">Password</label>
          <input
            type="text"
            onChange={handlePassword}
            maxLength={30}
            minLength={8}
          />
          <br />
          <label htmlFor="Remember"></label>
          <input type="checkbox" onChange={handleRemeber} />
          <input type="submit" value="submit" />
          <input type="reset" value="reset" />
        </form>
      </div>
    </>
  );
};

export default SignInForm;
