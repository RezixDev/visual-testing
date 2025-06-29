Here's a simple and clear `README.md` for your Playwright testing script:

````markdown
# Playwright Visual Regression Test

This project uses [Playwright](https://playwright.dev/) to run visual regression tests on web pages.

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) installed globally:

  ```bash
  npm install -g pnpm
  ```
````

- Playwright dependencies installed:

  ```bash
  pnpm install
  ```

## 🚀 How to Run Tests

To run the visual regression tests:

```bash
pnpm exec playwright test
```

This command will:

- Open target pages
- Take screenshots
- Compare them against the baseline images
- Report any visual differences

## 📁 Directory Structure

```
.
├── tests/
│   └── visual.spec.ts   # Example test file
├── screenshots/
│   └── baseline/         # Stores baseline screenshots
├── package.json
├── README.md
└── playwright.config.ts
```

## 🖼️ Updating Screenshots

If the UI has changed intentionally and you want to update the baseline screenshots:

```bash
pnpm exec playwright test --update-snapshots
```

## 🛠 Configuration

You can customize browser settings and test options in `playwright.config.ts`.
