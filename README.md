# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# update
npx nuxi upgrade
```

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

```bash
# npm vue-countup-v3
npm i vue-countup-v3

# yarn vue-countup-v3
yarn add vue-countup-v3

```

```bash
# yarn
yarn install --force

# npm
npm install --force

# pnpm
pnpm install --force
```

import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
build: {
transpile: ['vue-countup-v3']
}
})

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
