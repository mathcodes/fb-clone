<hr>
<h1 align="center">nextjs-typescript-tailwindcss-firebase</h1>
<hr>

This is a starter template for [Next.js](https://nextjs.org/) projects with [TypeScript](https://www.typescriptlang.org/) and [Tailwind CSS](https://tailwindcss.com/). Includes [Firebase](https://firebase.google.com/) authentication and database.

<h2>Table of Contents</h2>

- [Stack Overview](#so)
- [Getting Started](#gs)
  - [Configuration](#co)
  - [Installation](#in)
- [License](#li)
- [Let's Connect!](#lc)


<hr>
<h2 align="center" id="so">Stack Overview:</h2>
<hr>
`NextJS` is a framework for building server-rendered React applications. It allows for efficient performance and optimized SEO by pre-rendering pages on the server.

`TypeScript` is a superset of JavaScript that adds optional static typing and other features to improve code quality and maintainability.

`TailwindCSS` is a utility-first CSS framework that makes it easy to create consistent, responsive designs.

`MUI` is a Material-UI library for React that provides a set of pre-built components that follow the Material Design guidelines.

`Firebase` is a Backend-as-a-Service platform that provides a variety of services for building web and mobile applications, including authentication, database storage, and cloud functions.

Together, these technologies can be used to build a full-stack web application with user authentication, login, API endpoints, and database storage while rendering a consistent and responsive design that optimizes performance, size, and scalability.

<hr>
<h2 align="center" id="gs">Getting Started</h2>
<hr>
 
<h3 align="center" id="gs">Configuration</h3>
<hr>
### Firebase config:

Register a new web app under your [Firebase project](https://console.firebase.google.com/u/0/) and copy the config to your `.env.local` file:
```js
NEXT_PUBLIC_FIREBASE_API_KEY

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN

NEXT_PUBLIC_FIREBASE_PROJECT_ID

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET

NEXT_PUBLIC_FIREBASE_MESSAGING_SET

NEXT_PUBLIC_FIREBASE_APP_ID

NEXT_PUBLIC_BASE_URL
```

### TypeScript config:
tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### Tailwind config:
tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
```

### NextJS config:
next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
```
<hr>
<h3 align="center" id="in">Installation</h3>
<hr>

Install dependencies:

```bash
npm install
# or
yarn
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

### Production

Build the application:

```bash
npm run build
# or
yarn build
```

Start the application:

```bash
npm run start
# or
yarn start
```
<hr>
<h2 align="center" id="li">License</h2>
<hr>

```
MIT
```

<hr>
<h1 align="center" id="lc">Let's Connect!</h1>
<hr>
<p align="center">
  <a href="https://jonchristie.net" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=SITE&color=4faeba&style=plastic&logo=react&logo-color=white"/>
  </a>
  <a href="https://www.linkedin.com/in/jonpchristie/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=LINKED-IN&color=4faeba&style=plastic&logo=linkedin&logo-color=white"/>
  </a>
  <a href="https://twitter.com/jcircle9" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=TWITTER&color=4faeba&style=plastic&logo=twitter&logo-color=white"/>
  </a>
  <a href="https://angel.co/u/jon-christie-1" target="_blank">
      <img src="https://img.shields.io/static/v1?label=|&message=ANGEL-LIST&color=4faeba&style=plastic&logo=angellist&logo-color=white"/>
  </a>
  <a href="https://github.com/mathcodes/mathcodes.github.io/raw/sync/public/Jon_Christie_Resume_2023.pdf" target="_blank">
      <img src="https://img.shields.io/static/v1?label=|&message=RESUME&color=4faeba&style=plastic&logo=react&logo-color=white"/>
  </a>
</p>