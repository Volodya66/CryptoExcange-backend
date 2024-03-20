const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(schemas.registerUserSchema),
  ctrl.register
);

authRouter.post("/login", validateBody(schemas.loginUserSchema), ctrl.login);

module.exports = authRouter;
