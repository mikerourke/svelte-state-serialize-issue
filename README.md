# electron-svelte-vite-boilerplate

Starter project that uses Electron, Svelte, TypeScript, Vite, and Vitest.

## Prerequisites

- Node.js LTS (v20 as of Mar, 2023)
- pnpm

## Technologies Used

- Electron
- Svelte
- TypeScript
- Vite (`electron-vite`)
- Vitest
- ESLint
- Stylelint
- Prettier
- Commitizen/Conventional Commits

## Getting Started

- Clone this repo and remove the `.git` directory

- If you haven't already, enable `pnpm` using `corepack`:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

- Install dependencies:

```bash
pnpm install
```

- Once installation is complete, start the app. An Electron window will appear when the build is complete:

```bash
pnpm start
```

## Development

- Run unit tests with `pnpm vitest` (add `--run` flag to only run once)
- Lint the code with `pnpm eslint`
- Lint the styles with `pnpm stylelint`
- Check for errors in Svelte components with `pnpm svelte-check`

Coverage reports, build output, and any other build artifacts that shouldn't be committed are output to the `/out` directory.

### Adhering to Commit Conventions

We have a pre-commit hook in place to enforce Conventional Commits standards. To ensure your commits adhere to this convention, you can run the following when committing your changes:

```bash
pnpm commit
```

Follow the prompts to create your commit.
