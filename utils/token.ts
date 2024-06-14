import { Request } from "express";
import jwt from "jsonwebtoken";

const JWTSign = `${process.env.JWT_SIGN}`;
const decodeToken = (token: string): string => {
  let validToken = "";
  jwt.verify(token, JWTSign, (err, decodedToken) => {
    if (err) {
      throw err;
    }
    if (typeof decodedToken === "string") {
      throw new Error("Invalid token");
    }
    validToken = decodedToken?.id;
  });

  return validToken;
};

const getIDFromToken = (req: Request): string => {
  if (req.headers.authorization) {
    const token = decodeToken(req.headers.authorization.substr(7));
    return token;
  } else {
    return "";
  }
};

export { getIDFromToken, decodeToken };
