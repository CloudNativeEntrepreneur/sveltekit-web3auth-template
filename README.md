# sveltekit-web3auth-template

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

# FAQ

## YOUR SECRET IS EXPOSED

Yes, I know.

It'll only work in the local development cluster - this is part of [an example](https://github.com/CloudNativeEntrepreneur/web3auth-meta) that contains several moving parts, so I just generated some random secrets where they were needed and preconfigured things accordingly so you can just run it locally and everything will work. Couldn't go without secrets as part of that example is an authentication server and it's JWT integration with Hasura.

Don't use these proconfigured values in production. I typically use ExternalSecrets in prod. I'll add Helm charts and pipelines to this repo when I have time.
