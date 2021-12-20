<script lang="ts">
  import "../app.postcss";
  import { Web3Auth } from "sveltekit-web3auth";
  import { config } from "$lib/config";
  import Header from "$lib/components/shared/Header/index.svelte";
</script>

<Header />
<Web3Auth
  issuer={config.web3auth.issuer}
  clientId={config.web3auth.clientId}
  postLogoutRedirectURI={config.web3auth.postLogoutRedirectUri}
>
  <slot />
</Web3Auth>
