const Joi = require("joi");
const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const { EMAILREGEXP } = require("../constants");
const { Crypto } = require("./crypto");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    subscription: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    token: { type: String, default: "" },
    verify: {
      type: Boolean,
      default: false,
    },
    // cryptos: [Crypto],
    // avatarURL: { type: String, require: true },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(EMAILREGEXP).required(),
  password: Joi.string().min(6).required(),
});

const loginUserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const schemas = {
  registerUserSchema,
  loginUserSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
