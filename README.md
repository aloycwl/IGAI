# Insight Genesis

Bridge data from web2 to web3.

This repository is structured as a monorepo containing both the frontend application and the backend service.

## Directory Structure

- `/frontend` - The UI/UX application built with React, Vite, and TailwindCSS.
- `/backend` - The Node.js Express backend service.

## Running Locally

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed. We recommend Node v18+.

### Setup

From the root directory, install all dependencies for both frontend and backend using npm workspaces:

```bash
npm install
```

### Running the Backend

The backend runs on port 3000 by default (or the `PORT` environment variable).

```bash
npm run start:backend
```

### Running the Frontend

The frontend development server runs on port 5173.

```bash
npm run dev:frontend
```

## Deployment

### Frontend (Vercel)

The frontend can be deployed to Vercel by selecting the `/frontend` directory as the Root Directory in the Vercel project settings.

### Backend (Render)

The backend is configured for deployment on Render. The `render.yaml` file in the `/backend` directory manages this deployment. Ensure the `rootDir` property in Render is set to `backend`.
