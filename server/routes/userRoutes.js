import express from "express";
import { signupUser } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/healthcheck", (req, res) => {
  res.sendStatus(200);
});

router.post("/signup", signupUser);

export default router;
