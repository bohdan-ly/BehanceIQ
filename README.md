# BehanceIQ™ - Lead Generation Framework for B2B Agencies

![BehanceIQ Framework](/public/agency.jpg)

A powerful landing page for the **BehanceIQ™ Framework** - a proven lead generation system that helps B2B agencies break the feast-or-famine cycle and consistently generate **+20 leads/month with $7k+ average checks**.

Built with **Next.js**, **Tailwind CSS**, and **Framer Motion**, this website showcases the framework that has helped scale DizArm from $0 to $1M in 2 years and generated over $10M in revenue for clients.

## 🚀 Features

### Core Functionality

- **Hero Section** with strategy call form and countdown timer
- **Campaign Results Gallery** with horizontal scroll animation showcasing real client results
- **Automated Acquisition Systems** presentation
- **Pre-Built Systems** showcase with client feedback screenshots
- **Success Stories** section
- **How It Works** process breakdown
- **Newsletter Signup** with welcome gift (free guide)
- **Testimonials** with text highlight reveal animation on scroll
- **Credibility Section** (Why Listen to Me) featuring Alex Vacca's credentials
- **Fixed Telegram Button** for instant contact
- **Live Notification** component showing recent signups

### Technical Features

- **Smooth Scroll Animations** powered by Framer Motion
- **Horizontal Scroll Gallery** for campaign results with progress bar
- **Text Highlight Reveal** animation on testimonials
- **Responsive Design** optimized for all devices
- **Email Form Integration** with API endpoints for newsletter subscription
- **Countdown Timer** for pricing updates
- **Client Logos** showcase
- **Service Sections** with detailed benefits

## 📋 Sections

1. **Hero Section**

   - BehanceIQ™ framework introduction
   - Availability badge for B2B agencies with $30K+/month revenue
   - Strategy call form with email input
   - Countdown timer for next price raise
2. **Clients Section**

   - Showcase of client logos
   - Live notification component
3. **Testimonials**

   - Client testimonials with logos
   - Text highlight reveal animation on scroll
4. **Service Section**

   - Service offerings with benefits
5. **Stories of Success**

   - Case studies and success stories
6. **How It Works**

   - Process breakdown of the framework
7. **Campaign Results**

   - Horizontal scrolling gallery of campaign case studies
   - Real metrics and results
   - Progress bar indicator
   - Smooth scroll-linked animations
8. **Pre-Built Systems**

   - Copy-paste pre-built systems for lead generation
   - Client feedback screenshots
   - Detailed benefits list
9. **Automated Acquisition Systems**

   - Introduction to automated systems
   - Benefits and features
10. **Why Listen to Me**

    - Alex Vacca's credentials and achievements
    - Author photo
    - Trust indicators
11. **Contact/Newsletter Section**

    - Newsletter signup form
    - Welcome gift offer (free guide)
    - Gift image display

## 🛠️ Technology Stack

- **Framework:** Next.js 13.4.18
- **UI Library:** React 18.2.0
- **Styling:** Tailwind CSS 3.3.3
- **Animations:** Framer Motion 10.16.0 & Motion 12.23.24
- **Icons:** React Icons 4.10.1
- **Utilities:** clsx 2.0.0

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/behance.git
   cd behance
   ```
2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
behance/
├── public/                 # Static assets
│   ├── companies/         # Client logos
│   └── ...
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── page.jsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── CampaignResults.jsx      # Horizontal scroll gallery
│   │   ├── ContactSection.jsx       # Newsletter signup
│   │   ├── WhyListenToMe.jsx        # Credentials section
│   │   ├── PreBuiltSystems.jsx      # Pre-built systems
│   │   ├── AutomatedAcquisitionSystems.jsx
│   │   ├── TelegramButton.jsx       # Fixed Telegram button
│   │   └── ...
│   └── ...
└── package.json
```

## 🎨 Key Components

### CampaignResults

Horizontal scrolling gallery with scroll-linked animations showing campaign case studies and metrics.

### ContactSection

Newsletter signup section with email form and welcome gift offer.

### TelegramButton

Fixed circular button in bottom-right corner for instant Telegram contact.

### WhyListenToMe

Credentials and achievements section with author photo and trust indicators.

### Testimonials

Client testimonials with text highlight reveal animation triggered on scroll.

## 🔧 Configuration

### Telegram Button

Update the Telegram URL in `src/components/TelegramButton.jsx`:

```jsx
telegramUrl = 'https://t.me/yourusername'
```

### Newsletter API

Configure the newsletter subscription endpoint in `src/components/ContactSection.jsx`:

```jsx
fetch('/api/subscribe-newsletter', { ... })
```

### Strategy Call Form

Configure the strategy call form endpoint in `src/components/StrategyCallForm.jsx`:

```jsx
fetch('/api/submit-strategy-call', { ... })
```

## 📝 Customization

### Update Content

- Edit component files in `src/components/` to update content
- Modify `src/app/page.jsx` to rearrange sections
- Update client logos in `public/companies/`

### Styling

- Tailwind CSS classes for styling
- Custom fonts: Mona Sans, RG-Spacious, RG-Standard
- Color scheme: Purple (#8f00ff) as primary brand color

### Images

- Add author photo: `public/alex-vacca.jpg`
- Add welcome gift image: `public/welcome-gift.jpg`
- Add client feedback screenshots: `public/client-feedback-1.png` through `client-feedback-4.png`

## 🚀 Deployment

The site can be deployed on any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Self-hosted** with Node.js

## 📄 License

This project is private and proprietary.

## 👤 Author

**Bohdan Lyshchenko**

- CEO of ClipSwift
- Co-founder, Scenarify AI
- Scaled ClipSwift from $0 to $100k in 1 year
- Helped 75+ agencies break the feast-or-famine cycle

## 📧 Contact

- **Telegram:** [@clip_swift](https://t.me/clip_swift)
- **Newsletter:** Sign up on the website for free guides and insights

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
