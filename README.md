# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Summative Lab: Building a React-Based Personal Project Showcase App

In this summative lab, you will design and develop a personal React-based project showcase application. Using the provided mock-up design document, you will build a Single Page Application (SPA) that adheres to modern frontend development practices. The application will demonstrate proficiency in Advanced React concepts such as state management through hooks, event handling, data fetching, and client-side routing. The lab reflects real-world challenges junior developers may face, preparing you to build scalable and interactive React applications.

## The Scenario

You are tasked with creating an administrator portal for an e-commerce website which will include.

* A landing page describing what the site is about.
* A form page that allows for a new product to be added.
* A product page that will show the product.
* Allow the administrator to change different values of the product such as price.
* A search functionality that allows users to dynamically search for a product.
* A responsive design that matches the mock-up.
  
## React Showcase App

A simple React + Vite application for showcasing coffee products and managing a coffee store catalog.

## Features

- Home page with store name and description
- Shop page with searchable and filterable coffee products
- Admin page with a form to add new coffee products
- Uses React Router for client-side navigation
- Fetches store and product data from `public/db.json`
- Development patching support for adding new products to the local data source

- ## Prerequisites

- Node.js 18+ installed
- npm available on your machine
- Git installed for cloning the repository

> The app fetches product data from `http://localhost:3000/productData` during development and/or from the static `public/db.json` file.

# Clone and run locally

1. Open a terminal.
2. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/react-showcase-app.git
   cd react-showcase-app
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser:

   ```
   http://localhost:5173
   ```

## Optional: Run a local JSON API for product data

If you want to use the admin form and save new coffee products, run a JSON server on port `3000`.

Using `npx`:

```bash
npx json-server --watch public/db.json --port 3000
```

Or install globally:

```bash
npm install -g json-server
json-server --watch public/db.json --port 3000
```

## Available npm scripts

- `npm run dev` — start the Vite development server
- `npm run build` — build the app for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint on the project
- `npm run deploy` — deploy the app to GitHub Pages if configured

## Notes

- The app uses React Router for navigation between Home, Shop, and Admin pages.
- Product data is stored in `public/db.json`.
- If data does not load, ensure the JSON server is running and refresh the browser.
EOF

## This is how it should look

### The Home Page 
<img width="1919" height="979" alt="Screenshot 2026-05-18 115319" src="https://github.com/user-attachments/assets/c46f6521-afaf-4f1e-ab00-4563841c11bd" />

### The Shop Page
<img width="1919" height="978" alt="Screenshot 2026-05-18 115337" src="https://github.com/user-attachments/assets/4a891503-9386-4458-9356-7c2a51812131" />

### The Admin Portal
<img width="1919" height="979" alt="Screenshot 2026-05-18 115359" src="https://github.com/user-attachments/assets/f108b40f-b30f-4c8a-922c-52a96b40f1c2" />


