# DigitalNomadsTaiwan Website

A modern, bilingual recruitment website for the DigitalNomadsTaiwan community (數位遊牧台灣) built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌐 **Bilingual Support**: English and Traditional Chinese with next-i18next
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ⚡ **Modern Stack**: Next.js 14, TypeScript, Framer Motion
- 🎨 **Beautiful UI**: Clean design with smooth animations
- 📱 **QR Code Preview**: Automatic QR code generation for mobile testing
- 🚀 **Performance Optimized**: Fast loading and smooth interactions

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installing Node.js on macOS

1. **Using Homebrew** (recommended):
   ```bash
   # Install Homebrew if not already installed
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   
   # Install Node.js
   brew install node
   ```

2. **Using the official installer**:
   - Download from [nodejs.org](https://nodejs.org/)
   - Choose the LTS version
   - Run the installer

3. **Using nvm** (Node Version Manager):
   ```bash
   # Install nvm
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   
   # Restart terminal or run:
   source ~/.bashrc
   
   # Install and use Node.js
   nvm install node
   nvm use node
   ```

## Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd /Users/hahaharry/Desktop/DNT_Website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The QR code will automatically appear in the bottom-right corner for mobile preview

## Project Structure

```
DNT_Website/
├── components/           # React components
│   ├── Header.tsx       # Navigation header with language switcher
│   ├── Footer.tsx       # Footer with contact info
│   ├── Layout.tsx       # Main layout wrapper
│   └── QRCodePreview.tsx # QR code for mobile preview
├── pages/               # Next.js pages
│   ├── _app.tsx        # App wrapper with i18n
│   └── index.tsx       # Home page
├── public/locales/      # Translation files
│   ├── en/common.json  # English translations
│   └── zh/common.json  # Chinese translations
├── styles/
│   └── globals.css     # Global styles with Tailwind
├── next.config.js      # Next.js configuration
├── next-i18next.config.js # i18n configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Language Support

The website supports:
- **English** (default): `/` or `/en`
- **Traditional Chinese**: `/zh`

Language switching is available via the globe icon in the header.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **next-i18next** - Internationalization for Next.js
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **QRCode.js** - QR code generation for mobile preview

## Development Notes

- The website automatically generates a QR code for mobile preview
- Language detection is enabled and persists in localStorage
- All components are responsive and optimized for both desktop and mobile
- Smooth scroll navigation and hover effects are implemented
- Chinese text uses optimized fonts (Noto Sans TC)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2024 DigitalNomadsTaiwan. All rights reserved. 