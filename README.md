# FundFlow Capital

A professional futures trading funding platform built with Next.js, TypeScript, and Tailwind CSS.

## Overview

FundFlow Capital is a comprehensive trading platform that provides traders with access to simulated capital for evaluation and potential funding opportunities. The platform features a modern, responsive design with comprehensive risk management tools and educational resources.

## Features

- **Trading Platform**: Advanced futures trading interface with real-time data
- **Funding Programs**: Multiple funding tiers with up to 90% profit splits
- **Risk Management**: Comprehensive drawdown limits and position sizing rules
- **Educational Resources**: Trading tools, analytics, and learning materials
- **Mobile Responsive**: Fully optimized for all devices and screen sizes
- **Professional UI**: Modern design with Tailwind CSS and Radix UI components

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd fundflow
```

2. Install dependencies
```bash
pnpm install
```

3. Run the development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
app/
├── about/          # About Us page
├── privacy/        # Privacy Policy page
├── terms/          # Terms of Service page
├── risk/           # Risk Disclosure page
├── layout.tsx      # Root layout
└── page.tsx        # Home page

components/
├── ui/             # Reusable UI components
└── ...             # Other components

public/
└── images/         # Static images and assets
```

## Pages

- **Home** (`/`) - Main landing page with trading program overview
- **About** (`/about`) - Company information and mission
- **Privacy** (`/privacy`) - Privacy policy and data handling
- **Terms** (`/terms`) - Terms of service and user agreements
- **Risk** (`/risk`) - Risk disclosure and trading warnings

## Design System

The project uses a consistent design system featuring:
- Dark theme with gray-900 background
- Cyan and blue gradient accents
- Modern card-based layouts
- Responsive mobile navigation
- Consistent typography and spacing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software owned by FundFlow Capital.

## Contact

For questions or support, please contact:
- **General**: info@fundflowcapital.com
- **Support**: support@fundflowcapital.com
- **Legal**: legal@fundflowcapital.com
