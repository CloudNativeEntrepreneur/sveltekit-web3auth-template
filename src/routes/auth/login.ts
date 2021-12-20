import { getServerOnlyEnvVar } from "sveltekit-web3auth";
import { post as login } from "sveltekit-web3auth/web3auth/routes/auth/login";
import { config } from "$lib/config";

const clientSecret =
  getServerOnlyEnvVar(process, "WEB3AUTH_CLIENT_SECRET") ||
  config.web3auth.clientSecret;
const issuer = config.web3auth.issuer;

export const post = login(clientSecret, issuer);
