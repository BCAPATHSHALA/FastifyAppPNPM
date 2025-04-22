# ⚡Fastify + TypeScript Basic Configuration Setup

A modern, scalable Fastify backend project using **TypeScript** and **pnpm** with proper folder structure, linting, and best practices.

## 🧰 Tech Stack

- 🚀 Fastify
- 🟦 TypeScript
- 📦 pnpm
- ✅ ESLint + Prettier
- 📁 MVC Pattern

## 📦 Installation

```bash
git clone https://github.com/BCAPATHSHALA/FastifyAppPNPM.git
cd fastify-app
pnpm install
```

## 🚀 Running the App

```bash
pnpm run dev      # Start development server with live reload
pnpm run build    # Compile TypeScript to JavaScript (output to dist/)
pnpm run start    # Run the compiled JS from dist/
```

## 📁 Project Structure

```plaintext
fastify-app/
├── dist/                           # Compiled JavaScript output (tsc)
├── node_modules/                   # Installed dependencies
├── src/                            # Application source code
│   ├── config/                     # App configs (env, DB, etc.)
│   ├── constants/                  # Reusable constants (status codes, messages)
│   ├── controllers/                # Route handler logic (controller functions)
│   ├── libs/                       # Custom libraries / utilities
│   ├── middlewares/                # Fastify middlewares
│   ├── models/                     # In-memory or database models
│   ├── routes/                     # Fastify route definitions
│   ├── schemas/                    # Validation schemas (Zod, JSON schema, etc.)
│   ├── types/                      # Shared TypeScript types/interfaces
│   └── index.ts                    # App entry point (Fastify server setup)
│
├── .env                            # Environment variables
├── .eslintrc.json                  # ESLint config
├── .gitignore                      # Files to ignore in Git
├── .prettierrc                     # Prettier config
├── LICENSE                         # 🛡 MIT License
├── package.json                    # Project metadata and scripts
├── pnpm-lock.yaml                  # Dependency lockfile (for pnpm)
├── README.md                       # Project documentation
└── tsconfig.json                   # ⚙ TypeScript config
```

## 🛠 Scripts

```json
"scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "pnpm run build && node dist/index.js"
},
```

## 🚀 Future Improvements

- Add authentication and authorization
- Add database integration
- Add logging and error handling
- Add unit and integration tests
- Add continuous integration and deployment pipelines
- Add Docker support for containerization


## 🛡 License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License — see [LICENSE](LICENSE) for full text.