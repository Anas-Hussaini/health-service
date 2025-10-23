# Quick Setup Guide

## Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## What's Included

### Pages & Sections
- ✅ Header with navigation
- ✅ Hero section with statistics
- ✅ Services section (tabbed interface)
- ✅ Why Choose Us section
- ✅ Doctors/Team section
- ✅ Testimonials section
- ✅ FAQ accordion
- ✅ Call-to-action section
- ✅ Footer with contact info

### Components Used (shadcn/ui)
- Button
- Card
- Badge
- Avatar
- Accordion
- Tabs
- Carousel

### Features
- 📱 Fully responsive design
- 🎨 Beautiful gradient color scheme (teal/cyan)
- ⚡ Fast loading with Next.js 15
- 🎯 Accessible UI components
- 💫 Smooth animations and transitions
- 🔍 SEO optimized

## Customization

### Colors
Edit `app/globals.css` to change the color scheme:
```css
--primary: 168 76% 42%; /* Teal color */
```

### Content
Edit `app/page.tsx` to modify:
- Services offered
- Doctor profiles
- Testimonials
- FAQ items

### Components
All UI components are in `components/ui/` and can be customized.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide Icons

Enjoy your new healthcare website! 🏥

