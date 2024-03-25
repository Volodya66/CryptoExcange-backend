const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const { CRYPTO_ENUM_SYMBOLS, CRYPTO_ENUM } = require("../constants");

const cryptoSchema = new Schema({
  name: { type: String, enum: CRYPTO_ENUM, required: true },
  symbol: { type: String, enum: CRYPTO_ENUM_SYMBOLS, required: true },
  //   price: { type: Number, required: true },
  //   marketCap: { type: Number, required: true },
  totalNumber: { type: Number, default: 0, required: true },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

cryptoSchema.post("save", handleMongooseError);

const addCoinSchema = Joi.object({
  name: Joi.string().required(),
  totalNumber: Joi.number().required(),
});

const sellingCurrency = Joi.object({
  name: Joi.string().required(),
  totalNumber: Joi.number().required(),
});

const schemas = {
  addCoinSchema,
  sellingCurrency,
};

const Crypto = model("crypto", cryptoSchema);

module.exports = {
  Crypto,
  schemas,
};
