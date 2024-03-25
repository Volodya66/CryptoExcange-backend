const CRYPTO_ENUM = {
  BTC: "Bitcoin",
  ETH: "Ethereum",
  XMR: "Monero",
  ETC: "Ethereum Classic",
  //
  BNB: "BNB",
  LTC: "Litecoin",
  SOL: "Solana",
  MATIC: "Polygon",
  NEAR: "NEAR Protocol",
  TON: "Toncoin",
  USDT: "Tether",
  XRP: "Ripple",
  ADA: "Cardano",
  DOT: "Polkadot",
  LINK: "Chainlink",
  DOGE: "Dogecoin",
};

const CRYPTO_ENUM_SYMBOLS = Object.keys(CRYPTO_ENUM);

module.exports = {
  CRYPTO_ENUM,
  CRYPTO_ENUM_SYMBOLS,
};
