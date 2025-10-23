# HealthCare Plus - Health Service Website

A beautiful and modern health service website built with Next.js 15, React 18, TypeScript, and shadcn/ui components.

## Features

- 🎨 Modern, visually appealing design with gradient accents
- 📱 Fully responsive layout
- 🎯 Multiple sections: Services, Doctors, Testimonials, FAQ
- 💊 Comprehensive healthcare services showcase
- 👨‍⚕️ Doctor profiles with ratings
- 💬 Patient testimonials
- ❓ Interactive FAQ accordion
- 🎨 Built with shadcn/ui components
- ⚡ Fast and optimized with Next.js 15

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css         # Global styles with custom CSS variables
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main homepage component
├── components/
│   └── ui/                 # shadcn/ui components
│       ├── accordion.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       └── tabs.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── package.json
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Technologies Used

- **Next.js 15** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icons

## Key Sections

1. **Hero Section** - Eye-catching introduction with key statistics
2. **Services** - Tabbed interface showing Primary Care, Specialty Care, and Emergency services
3. **Why Choose Us** - Highlighting key benefits
4. **Our Doctors** - Team showcase with profiles
5. **Testimonials** - Patient reviews
6. **FAQ** - Common questions with accordion
7. **CTA** - Call-to-action for appointments
8. **Footer** - Contact information and links

## Customization

The color scheme uses teal and cyan as primary colors. You can customize the theme in `app/globals.css` by modifying CSS variables.

## Build for Production

```bash
npm run build
npm start
```

## License

MIT License

