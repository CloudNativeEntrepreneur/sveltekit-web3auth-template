import { getServerOnlyEnvVar, getUsersPostHandler } from "sveltekit-web3auth";
import { config } from "$lib/config";

const clientSecret =
  getServerOnlyEnvVar(process, "WEB3AUTH_CLIENT_SECRET") ||
  config.web3auth.clientSecret;
const issuer = config.web3auth.issuer;

export const post = getUsersPostHandler(clientSecret, issuer);
