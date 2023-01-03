import sha256 from "crypto-js/sha256";

export const calculateSHA256 = (...args) => {
  let str = "";

  args.forEach((value) => {
    if (Array.isArray(value)) {
      value.forEach((tx) => {
        str += Object.values(tx).join("");
      });
    } else if (typeof value === "object") {
      str += Object.values(value).join("");
    } else {
      str += value;
    }
  });

  return sha256(str).toString();
};

export const mine = (block, coinbase, transactions, data, previousHash) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let newNonce = 0;

      while (
        !calculateSHA256(
          block,
          newNonce,
          coinbase || "",
          transactions || data,
          previousHash || ""
        ).startsWith("0000")
      ) {
        newNonce = Math.floor(Math.random() * 1000000 + 1);
      }

      return resolve(newNonce);
    }, 100);
  });
};
