const SignInForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); //αποτρέπει τη προεπιλεγμένη συμεριφορά της φόρμας
    //Λαμβάνει τα στοιχέια από τα πεδία της φόρμας

    console.log(
      `Username: ${username} | Password: ${password}| rememberMe: ${remeberMe}`
    );
  };

  return (
    <>
      <div className="loginForm">
        <form action="/sendData" method="GET" onSubmit={handleSubmit}>
          <label htmlFor="txtUsername">Username</label>
          <input
            type="text"
            name="userName"
            id="txtUsername"
            minLength={5}
            maxLength={20}
            required
          />
          '(*)'
          <br />
          <label htmlFor="txtPassword">Password</label>
          <input
            type="text"
            name="password"
            id="txtPassword"
            maxLength={30}
            minLength={8}
          />
          <br />
          <input type="submit" value="submit" />
          <input type="reset" value="reset" />
        </form>
      </div>
    </>
  );
};

export default SignInForm;
