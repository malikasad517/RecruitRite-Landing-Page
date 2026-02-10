# RecruitRite Landing Page

A modern, responsive landing page built with Next.js 15, TypeScript, Tailwind CSS, and GSAP animations.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **GSAP** with ScrollTrigger for smooth animations
- **Responsive Design** optimized for all devices
- **Component-based Architecture** for easy maintenance
- **Custom Fonts** (Schibsted Grotesk, Be Vietnam Pro, Inter)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js)

To check if you have Node.js and npm installed:
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/

## 📦 Installation & Setup

### Step 1: Extract the Project

Extract the ZIP file to your desired location.

### Step 2: Navigate to Project Directory

Open your terminal/command prompt and navigate to the project folder:

```bash
cd recruitrite-landing
```

### Step 3: Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:
- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- And all other dependencies

**Note:** This may take 2-5 minutes depending on your internet connection.

### Step 4: Add Your Images

Place your image files in the `public/` folder with the following names:
- `Whisk_11.png` (Hero background)
- `AdobeExpressRobot_mascot_reviews_holographic_resumes11BackgroundRemoved2.png`
- `Whisk_173ea8bb049ab01b17c48b6d9e258003dr1.png`
- `Whisk_36bd55048c49e338fd242fd0e065630edr2.png`
- `Whisk_173ea8bb049ab01b17c48b6d9e258003dr1(1).png`
- `Whisk_37.png`

**Note:** If you don't have these images, the site will still work but show broken image placeholders.

### Step 5: Run the Development Server

Start the development server:

```bash
npm run dev
```

You should see output like:
```
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000
```

### Step 6: Open in Browser

Open your browser and navigate to:
```
http://localhost:3000
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
recruitrite-landing/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero section with CTA
│   ├── HowItWorks.tsx      # How it works section
│   ├── WhyRecruitRite.tsx  # Statistics section
│   ├── UseCases.tsx        # Use cases carousel
│   ├── Pricing.tsx         # Pricing cards
│   ├── APISection.tsx      # API documentation preview
│   └── Footer.tsx          # Footer with links
├── public/
│   └── (your images here)
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md              # This file
```

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.ts` to customize colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#9E56FF',
      secondary: '#5B00D6',
      dark: '#0A0B3A',
    },
  },
},
```

### Modifying Content

Each section is a separate component in the `components/` folder. Edit the respective file to change content.

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`

## 🚀 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

To test the production build locally:

```bash
npm start
```

## 🌐 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms

- **Netlify**: Deploy via drag-and-drop or Git
- **AWS**: Use Amplify or S3 + CloudFront
- **DigitalOcean**: Use App Platform
- **Self-hosted**: Use PM2 with `npm start`

## 🔧 Troubleshooting

### Issue: `npm install` fails

**Solution:** 
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

### Issue: Port 3000 already in use

**Solution:**
- Use a different port: `npm run dev -- -p 3001`
- Or kill the process using port 3000

### Issue: Images not showing

**Solution:**
- Check that images are in the `public/` folder
- Verify image file names match exactly (case-sensitive)
- Clear browser cache

### Issue: Animations not working

**Solution:**
- Ensure GSAP is installed: `npm install gsap`
- Check browser console for errors

## 📞 Support

If you encounter any issues:

1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure Node.js version is 18+
4. Clear `.next` folder and rebuild

## 📄 License

This project is proprietary and confidential.

## 🙏 Credits

Built with:
- Next.js
- React
- Tailwind CSS
- GSAP
- TypeScript

---

**Happy Coding! 🎉**
