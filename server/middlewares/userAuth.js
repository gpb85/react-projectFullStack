import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.headers.authorization || req.headers.Authorization;
  try {
    const decoded = jwt.verify(token, process.env.JSONSECRETKEY);
    req.user = decoded;
    console.log(decoded, "decoded");
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default auth;
