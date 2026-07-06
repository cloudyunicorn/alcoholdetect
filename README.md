# 🧪 Online Alcohol Detect (BAC Calculator)

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-orange?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![Built with Astro](https://img.shields.io/badge/Built_with-Astro_v6-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS v4](https://img.shields.io/badge/CSS-Tailwind_v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Online Alcohol Detect** is a clinical-grade, privacy-first Blood Alcohol Concentration (BAC) estimator. Unlike basic calculators that rely on static parameters, this platform leverages **Watson's Total Body Water (TBW) regression equations** to deliver precise, gender-tailored calculations. 

Designed with a sleek, high-performance, Vercel-inspired minimalist user interface, the tool features real-time interactive SVG charting, comprehensive drink timeline logging, and a global database of driving limits and local emergency contacts.

🔗 **Live Website:** [alcoholdetect.com](https://www.alcoholdetect.com)

---

## ✨ Key Features

- **Biological Profile customizer:**
  - Gender-tailored metrics (Male, Female, and inclusive gender-averaged models).
  - Multi-unit support (KG/LBS for weight, CM/IN for height).
  - Age-based adjustments for body water changes.
- **Dynamic Drink Timeline Logger:**
  - Log multiple drinks with varying volumes (ML/OZ) and ABV percentages.
  - Set custom timestamps for when each drink was consumed to model absorption over time.
- **Dynamic Sobriety Dashboard:**
  - Real-time countdown to legal driving limits (customized per country).
  - Countdown to complete sobriety ($0.00\%$ BAC).
- **Interactive SVG Charting:**
  - Custom-drawn, ultra-lightweight SVG line charts tracking continuous BAC absorption and clearance curves.
  - Interactive hover details and real-time animation.
  - Zero heavy external charting library dependencies, ensuring sub-millisecond load times.
- **Global Emergency Services Registry:**
  - Dynamic local emergency number lookup (Police, Ambulance, Fire) matching selected driving limit countries.
- **Sleek Minimalist Design:**
  - Immersive dark and light mode aesthetics modeled after modern developer platforms.
  - Hand-crafted micro-animations using `motion` for polished transitions.

---

## 📐 The Science & Math

Rather than relying on the simplistic Widmark factor (which uses a generic static body distribution coefficient $r$ of $0.68$ for men and $0.55$ for women), this estimator uses the **Watson Formula** to calculate individual **Total Body Water (TBW)** in liters:

### 1. Total Body Water (TBW) Calculations
$$
\text{TBW}_{\text{Male}} = 2.447 - (0.09516 \times \text{Age}) + (0.1074 \times \text{Height in cm}) + (0.3362 \times \text{Weight in kg})
$$
$$
\text{TBW}_{\text{Female}} = -2.097 + (0.1069 \times \text{Height in cm}) + (0.2466 \times \text{Weight in kg})
$$

### 2. Blood Alcohol Concentration (BAC) Curve Model
Alcohol absorption peaks gradually before elimination takes over. We model the absorption phase linearly over an absorption window (default $0.75$ hours) combined with a zero-order elimination rate ($\beta = 0.015\%$ BAC per hour):

$$
\text{BAC}(T) = \max\left(0, \left( \min\left(1, \frac{T}{T_{\text{absorption}}}\right) \times \frac{\text{Pure Alcohol (g)} \times 0.8}{\text{TBW (L)} \times 10} \right) - (\beta \times T) \right)
$$

Where:
- **Pure Alcohol (g)** = $\text{Volume (ml)} \times (\text{ABV} / 100) \times 0.789 \text{ (density of ethanol)}$
- $0.8$ represents the density factor of alcohol in blood vs body water.
- $10$ converts the result to weight/volume percentage.

---

## 🛠️ Tech Stack

- **Framework:** [Astro v6](https://astro.build/) (Static Site Generation / Hybrid Rendering)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/)
- **SEO & Performance:** `@astrojs/sitemap`, `astro-indexnow` (automated search engine pinging)
- **Hosting & Serverless:** [Cloudflare Pages](https://pages.cloudflare.com/) + [Wrangler](https://developers.cloudflare.com/workers/wrangler/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js `^22.12.0` or higher
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/alcoholdetect.git
   cd alcoholdetect
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

### 🧞 Available Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds production-optimized site into `./dist/` |
| `npm run preview` | Builds and runs local Wrangler dev server to preview on Cloudflare environment |
| `npm run deploy` | Builds the site and deploys directly to Cloudflare Pages |

---

## 🌐 Deployment to Cloudflare Pages

To deploy the build output `./dist/` to Cloudflare Pages manually or via CI/CD, run:
```bash
npm run deploy
```
Make sure you have authenticated your Wrangler CLI with your Cloudflare account.

---

## 🛡️ Disclaimer

This application is for **informational and educational purposes only**. The mathematical models used are based on population averages and cannot account for individual biological differences such as metabolic rates, food consumption, hydration levels, medical conditions, or medications. 

**Never rely on this tool to determine your fitness to drive.** If you drink, do not drive. Always use public transport, ride-shares, or designated drivers.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) or the dynamic terms page for more information.
