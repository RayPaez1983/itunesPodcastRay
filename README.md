# Next.js iTunes Podcast Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To start the development server, run the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Environment Variables

To run the project locally, create a `.env` file at the root of the project and add the following variables:

### Development Environment

```
NEXT_PUBLIC_ITUNES_BASE_URL=https://api.allorigins.win/get?url=
NEXT_PUBLIC_API_BASE_URL=https://itunes.apple.com
NODE_ENV=development
NEXT_PUBLIC_ASSET_MODE=unminified
```

### Production Environment

```
NEXT_PUBLIC_ITUNES_BASE_URL=https://api.allorigins.win/get?url=
NEXT_PUBLIC_API_BASE_URL=https://itunes.apple.com
NODE_ENV=production
NEXT_PUBLIC_ASSET_MODE=minified
```

## Project Features

This project showcases the use of various React and Next.js tools to demonstrate proficiency in modern front-end development, including:

- **Custom Hooks:** Encapsulating reusable logic for better modularity and maintainability.
- **Redux State Management:** Implementing centralized state management using Redux for predictable application state handling.
- **Local State Management:** Utilizing React's built-in state management capabilities where applicable for performance optimization.

## Running the Production Environment Locally

To run the production build locally:

1. Build the application:
   ```bash
   npm run build
   ```
   This will generate the `.next` bundle required for production.

2. Start the production server:
   ```bash
   npm run start
   ```

## Deployment on Vercel

### Preview Deployment
To deploy a preview environment, merge your changes into the `dev` branch.

### Production Deployment
To deploy to production:
- Merge your changes into the `main` branch.
- Alternatively, you can manually promote a deployment to production via the Vercel dashboard.

For more details and to manage deployments, visit:
[Deployments](https://vercel.com/raymond-silvers-projects/itunes-podcast-ray-p9ki/deployments).

---

This project demonstrates a strong command of Next.js, React, and state management techniques, showcasing proficiency in both global (Redux) and local state solutions to build scalable applications efficiently.

