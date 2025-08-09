# Strawberry Backpack

A modern web application built with Vite, TypeScript, and Tailwind CSS.

## Features

- ⚡ Fast development with Vite
- 🎨 Styled with Tailwind CSS
- 📝 TypeScript for type safety
- 🧹 Code quality with Biome linter
- 📦 Efficient package management with pnpm

## Project Structure

```
src/
├── images/          # Static images and assets
│   ├── Cat.png
│   └── SBlogo.png
├── scripts/         # TypeScript source files
│   └── index.ts
├── styles/          # CSS stylesheets
│   └── index.css
├── catalogue.html   # Catalogue page
└── index.html       # Main entry point
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd strawberrybackpack
```

2. Install dependencies:
```bash
pnpm install
```

### Development

Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
pnpm build
```

The built files will be output to the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
pnpm preview
```

### Code Quality

Run the linter to check and fix code issues:
```bash
pnpm lint
```

## Tech Stack

- **Build Tool**: Vite 7.1.1
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 4.1.11
- **Linting**: Biome 2.1.4
- **CSS Processing**: PostCSS with cssnano
- **Package Manager**: pnpm

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `lint` - Run Biome linter with auto-fix

## License

[Add your license information here]

## Contributing

[Add contribution guidelines here]