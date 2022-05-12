import sha256 from "crypto-js/sha256";

export const calculateSHA256 = (...args) => sha256(args.join("")).toString();
