import sha256 from "crypto-js/sha256";

export const calculateSHA256 = (...args) => {
  let str = "";
  args.forEach((value) => {
    if (typeof value === "object") {
      value.forEach((tx) => {
        str += Object.values(tx).join("");
      });
    } else {
      str += value;
    }
  });

  return sha256(str).toString();
};
