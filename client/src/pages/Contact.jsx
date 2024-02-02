import { useState } from "react";

const Contact = () => {
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [email, SetEmail] = useState("");

  const submitFunction = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email);
    SetFirstName("");
    SetLastName("");
    SetEmail("");
  };

  return (
    <>
      <form onSubmit={submitFunction}>
        <div className="firstnameInput">
          <label>Firstname</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => SetFirstName(e.target.value)}
            required
          />
        </div>
        <div className="lastnameInput">
          <label>Lastname</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => SetLastName(e.target.value)}
            required
          />
        </div>
        <div className="emailForm">
          <label>email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            required
          />
        </div>
        <div className="formButton">
          <button>submit</button>
        </div>
      </form>
    </>
  );
};

export default Contact;
