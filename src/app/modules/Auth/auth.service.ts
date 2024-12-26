import { Secret } from "jsonwebtoken";
import config from "../../config";
import { jwtHelpers } from "../../helpers/jwtHelpers";

const loginUserToDb = async (payload: { email: string; password: string }) => {
  if (!(payload.email == config.email && payload.password == config.password)) {
    throw new Error("Invalid password or email,Try with valid credentials");
  }

  const accessToken = jwtHelpers.tokenGenerator(
    {
      email: payload.email,
      role: "OWNER",
    },
    config.jwt_access_token as Secret,
    config.jwt_access_expires_in as string
  );

  const refreshToken = jwtHelpers.tokenGenerator(
    {
      email: payload.email,
      role: "OWNER",
    },
    config.jwt_refresh_token as Secret,
    config.jwt_refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const authServices = {
  loginUserToDb,
};
