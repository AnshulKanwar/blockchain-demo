import sha256 from "crypto-js/sha256";

export const calculateSHA256 = (...args) => {
  let str = "";

  console.log(args);
  args.forEach((value) => {
    console.log(value);
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
