import express from "express";
import { signupUser, signinUser } from "../controllers/userControllers.js";
import auth from "../middlewares/userAuth.js";

const router = express.Router();

router.get("/healthcheck", (req, res) => {
  res.sendStatus(200);
});

router.post("/signup", signupUser);
router.post("/signin", signinUser);

router.get("/loggeduser", auth);

export default router;
