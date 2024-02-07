import User from "../models/userschema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const signupUser = async (req, res) => {
  try {
    const { userName, firstName, lastName, email, birthday, password } =
      req.body;
    //κρυπτογράφηση password
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    //Create new User
    const newUser = new User({
      userName,
      firstName,
      lastName,
      email,
      birthday,
      //save password as hassed
      password: hashPassword,
    });
    await newUser.save();
    res.send({ success: true, newUser });
    console.log("User created successfully:", newUser);
  } catch (error) {
    console.error("Error creating account", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(404).send("user dont found");
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.send({ success: false, message: "wrong password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JSONSECRETKEY, {
      expiresIn: "1h",
    });

    res.send({ user, success: true, token });
  } catch (error) {
    console.error("Error creating account", error.message);
    res.send({ success: false });
  }
};
