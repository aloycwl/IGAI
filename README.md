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

### Environment Variables

Before starting the backend, you must create a `.env` file in the root directory (or ensure the environment has these variables set). Required secrets:

- `GH`: GitHub API Configuration or Token
- `IK`: Insight Genie API Key
- `IS`: Insight Genie API Secret
- `MA`: Magic Admin Secret Key
- `PK`: Private Key for on-chain execution
- `SB`: Supabase Service Role Key / Auth Token

### Running the Backend

The backend runs on port 5000 by default.

```bash
npm run start:backend
```

### Running the Frontend

The frontend development server runs on port 5173.

```bash
npm run dev:frontend
```

## Testing the API

The backend uses **Jest** and **Supertest** to test its Express endpoints.
You can run the API tests from the root directory:

```bash
npm run test --workspace=backend
```

Or from inside the `backend` folder:

```bash
cd backend
npm test
```

## Backend API Documentation

The backend service connects to various third-party APIs (Supabase, Insight Genie, On-chain contracts). Below are the prominent routes.

### Endpoints

#### `GET /github`
Returns the `GH` environment configuration.
- **Auth**: None
- **Response**: `200 OK`

#### `GET /iframe`
Generates a face-scan video iframe token via the Insight Genie API.
- **Auth**: Requires `auth` header (Supabase key checking).
- **Query Params**:
  - `g`: Gender (e.g., `male` or `female`)
  - `y`: Age
- **Response**: Returns the URL/Iframe token string.

#### `GET /foot`
Requests a digital footprint scan using email/phone via the Insight Genie API.
- **Auth**: Requires `auth` header.
- **Query Params**:
  - `e`: Email
  - `c`: Phone Code
  - `n`: Phone Number
- **Response**: JSON result from the scan.

#### `GET /ref`
Records a reference mapping between a `to` address and a `from` address.
- **Auth**: None
- **Headers**:
  - `t`: Target ("to") address
  - `f`: Source ("from") address
- **Response**: `200 OK`

#### `GET /les`
Retrieves a public address from the Magic Admin SDK using a provided token.
- **Auth**: None
- **Headers**:
  - `m`: Magic Auth Token
- **Response**: The user's public address string.

#### `GET /info`
Fetches on-chain info for an address including ERC-20 balance and its reference/referrer mappings.
- **Auth**: None
- **Query Params**:
  - `addr`: Wallet Address
- **Response**: JSON containing `balance`, `to`, and `from` data.

#### `POST /store`
Submits data to be stored on IPFS via web3.storage and deducts a contract token balance asynchronously.
- **Auth**: None
- **Headers**:
  - `addr`: Receiver Address
  - `type`: Record Type
- **Body**: JSON payload data
- **Response**: `200 OK`

#### `POST /v`
Analyzes a voice recording through the Insight Genie API and stores the resulting data on IPFS/Onchain.
- **Auth**: Requires `auth` header.
- **Body (`multipart/form-data`)**:
  - `audio`: The audio file upload
  - `v`: Voice Type ID
  - `a`: Wallet Address
- **Response**: JSON containing the score analysis from Insight Genie.

#### Fallback `GET /*`
If no API routes match, the backend will attempt to serve the frontend dist folder's `index.html`.

## Deployment

### Frontend (Vercel)

The frontend can be deployed to Vercel by selecting the `/frontend` directory as the Root Directory in the Vercel project settings.

### Backend (Render)

The backend is configured for deployment on Render. The `render.yaml` file in the `/backend` directory manages this deployment. Ensure the `rootDir` property in Render is set to `backend`.
