# SECRO-FILL Showcase

Create a premium demo website for SECRO-FILL, a German medical aesthetics dermal filler brand.

The website should feel like a combination of luxury beauty, premium skincare, and advanced medical technology.

Main focus:
Create a one-page landing homepage with exactly 8 sections:

Hero section

Trust bar / quick proof section

Services / offers section

About / positioning section

Portfolio / work proof section

Process / how it works section

Testimonials section

Final CTA / contact section

Also create lightweight skeleton pages:

About

Services

Contact

Homepage details:

Hero:
Create a cinematic premium hero section with beauty and medical aesthetics imagery.
Include:

Headline

Short subheadline

Primary CTA

Secondary CTA

Header:
Create a professional header with logo placeholder, navigation, and CTA button.
Desktop header should be transparent over the hero image and become sticky with blur/background on scroll.

Navigation:
Home, About, Services, Portfolio, Testimonials, Contact.

Trust Bar:
Add a minimal moving trust bar showing:

Made in Germany

10+ Years Expertise

Medical Aesthetics

Professional Solutions

Services Section:
Create premium product cards for:

SECRO-FILL DEEP 10ml

SECRO-FILL DEEP 3×3.2ml

SECRO-FILL BODY FILLER

Each card should include:

Image placeholder

Short description

CTA button

About Section:
Explain SECRO-FILL positioning:

Scientific innovation

Advanced manufacturing

Global aesthetic solutions

Portfolio Section:
Create before/after gallery cards showing facial contour and body transformation examples.
Use replaceable image placeholders.

Process Section:
Create a simple professional partnership process:
Consultation → Product Selection → Partnership → Support

Testimonials:
Create premium testimonial cards with replaceable placeholders.
Do not invent real customer names.

Final CTA:
Create a strong partnership-focused contact section with:

Contact form

WhatsApp/contact button

Partnership message

Design requirements:

Premium medical beauty aesthetic

Ivory, emerald green, champagne gold palette

Elegant typography

Large whitespace

Luxury card design

Smooth subtle animations

Responsive mobile-first design

Mobile:
Create custom mobile layout.
Include:

Mobile header with logo and brand name

Hamburger menu

Bottom sticky navigation with contact CTA

SEO:
Use semantic headings, optimized metadata structure, descriptive image alt placeholders.

Multilingual:
Support:

English

Arabic

Persian

Default language:
English

Implement:

Language switcher

Correct RTL layout for Arabic/Persian

Mirrored directional layouts

RTL text alignment and animations

Performance:

Optimize images

Lazy load images

Avoid heavy animations

Keep the website fast

Do not add:

Blog

Dashboard

Ecommerce checkout

Complex pages

The final result should look like a premium global medical aesthetics brand website designed to attract clinics, doctors, and distributors.

## Development

This project uses Next.js 15 with the App Router. You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

Available commands:

```sh
npm run dev       # Start the development server
npm run lint      # Run ESLint
npm run build     # Create the production build
npm run start     # Serve the production build
```

The application exposes `/`, `/about`, `/services`, and `/contact`. The homepage preserves English, Arabic, and Persian language switching, including RTL layout behavior.
