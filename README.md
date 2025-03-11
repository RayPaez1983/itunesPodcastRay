This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Enviroment variables:

To run the project locally, you should add a .env file with the following variables at the root project level.

- Dev enviroments

  - `NEXT_PUBLIC_ITUNES_BASE_URL=https://api.allorigins.win/get?url=`
  - `NEXT_PUBLIC_API_BASE_URL=https://itunes.apple.com`
  - `NODE_ENV = development`
  - `NEXT_PUBLIC_ASSET_MODE=unminified`

- Prd enviroments
  - `NEXT_PUBLIC_ITUNES_BASE_URL=https://api.allorigins.win/get?url=`
  - `NEXT_PUBLIC_API_BASE_URL=https://itunes.apple.com`
  - `NODE_ENV = production`
  - `NEXT_PUBLIC_ASSET_MODE=minified`

## Deploy on Vercel

To deploy in preview you only needs to merge your changes to the dev branch and to deploy in prd you need to merge your changes in the main branch or click in the Promote to production in the following link you could visit the deployment details an do it.

Deployments [Deployments](https://vercel.com/raymond-silvers-projects/itunes-podcast-ray-p9ki/deployments)
