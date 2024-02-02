import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { register } = useContext(AppContext);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleBirthday = (e) => {
    setBirthday(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Αποτρέπει συμπεριφορά της προηγούμενης φόρμας

    if (password !== repeatPassword) {
      return alert("Password is not the same");
    }

    register(userName, firstName, lastName, email, birthday, password);

    console.log(
      `Username:${userName}   Firstname:  ${firstName} \n Lastname: ${lastName} \n email: ${email}\n date: ${birthday} \n password: ${password}`
    );
  };

  return (
    <>
      <div className="signUpForm">
        <span>
          <h3>sign Up</h3>
        </span>
        <div className="form">
          <form action="/sendData" method="GET" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" onChange={handleUserName} required />
            <label>Firstname</label>
            <input
              type="text"
              onChange={handeFirstName}
              minLength={3}
              maxLength={30}
              required
            />
            '(*)'
            <br />
            <label>Lastname</label>
            <input
              type="text"
              onChange={handeLastName}
              minLength={3}
              maxLength={30}
              required
            />
            '(*)'
            <br />
            <label>Email</label>
            <input type="email" onChange={handleEmail} required />
            '(*)'
            <br />
            <label>Birthday</label>
            <input
              type="date"
              onChange={handleBirthday}
              max={"2006-01-01"}
              //value=?
              required
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              onChange={handlePassword}
              minLength={8}
              maxLength={30}
              placeholder="Enter your password"
              //autoComplete="on"
              pattern="[0-9a-zA-z]{4,10}"
              required
            />
            '(*)'
            <br />
            <label>Repeat password</label>
            <input
              type="Password"
              onChange={handleRepeatPassword}
              maxLength={30}
              placeholder="Repeat your password"
              //autoComplete="on"
              pattern="[0-9a-zA-z]{4,10}"
              required
            />
            <br />
            <input type="submit" value="submit" />
            <input type="reset" value="reset" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
