import User from "../models/userschema.js";

export const signupUser = async (req, res) => {
  try {
    const { userName, firstName, lastName, email, birthday, password } =
      req.body;
    const newUser = new User({
      userName,
      firstName,
      lastName,
      email,
      birthday,
      password,
    });
    await newUser.save();
    res.send({ success: true, newUser });
    console.log("User created successfully:", newUser);
  } catch (error) {
    console.error("Error creating account", error.message);
    res.send({ success: false, error: error.message });
  }
};
