import { Router } from "express";
import cors from "cors";
import healthController from "../controllers/health.js";
import authController from "../controllers/auth.js";
import privacyController from "../controllers/privacy.js";
import isAuth from "../middlewares/isAuth.js";
import createLP from "../controllers/lessonPlan/createLP.js";
import getLP from "../controllers/lessonPlan/getLP.js";
import viewLP from "../controllers/lessonPlan/viewLP.js";

const router = Router();

router.use(cors());

router.get("/health", healthController.getHealth);
router.post("/health", healthController.postHealth);
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/public", privacyController.publicPath);
router.get("/private", isAuth, privacyController.privatePath);
router.post("/newlp", isAuth, createLP);
router.get("/lessonplans", isAuth, getLP);
router.get("/viewlp/:id", isAuth, viewLP);

export default router;
