# Digital Ascend Arts Production — Official Website

This repository contains the official single-page website for **Digital Ascend Arts Production**, East Africa's first Romantic Thriller Theater.

The site is production-ready, strategically positioned, and serves as the primary public-facing presence for the company.

---

## Brand Positioning

**Tagline:** Where Desire Meets Danger

**Category:** Romantic Thriller Theater

**Mission:** Quarterly 90-minute immersive theatrical experiences for adults seeking sophisticated entertainment, not education.

**Target Audience:** Adults 25-45, 18+ content, entertainment-first positioning

---

## Purpose of This Repository

* Official marketing site for Digital Ascend Arts Production
* Communicates brand identity, category positioning, and upcoming productions
* Captures waitlist for ticket sales
* Deployed as a static site via **Vercel**
* Production-ready and complete

This is not a placeholder or work-in-progress. The site is strategically designed for category creation and ticket sales.

---

## Technology Stack

* **HTML5** — Semantic structure
* **CSS3** — Contemporary Edge color palette, responsive design
* **Google Fonts** — Space Grotesk (brand typeface)
* **AI-Generated Images** — DALL-E 3 via ChatGPT
* **Git + GitHub** — Version control
* **Vercel** — Hosting and auto-deployment

No frameworks. No build tools. Minimal JavaScript (theme toggle only).

---

## Project Structure
```
digital-ascend-arts/
├── index.html              # Main page (complete)
├── css/
│   └── styles.css          # Brand styling system
├── assets/
│   ├── daap-icon.svg       # Logo icon
│   ├── favicon.svg         # Browser tab icon
│   └── images/
│       ├── hero-background.jpg       # Hero section background
│       ├── production-teaser.jpg     # Production card image
│       └── immersive-staging.jpg     # Experience section image
├── .gitignore
└── README.md
```

---

## Site Sections

1. **Hero** — "Where Desire Meets Danger" with background image
2. **About** — Category definition (Romantic Thriller Theater)
3. **The Experience** — Value propositions, 18+ content notice
4. **Philosophy** — Why we exist (differentiation from educational theater)
5. **Founder** — Bonaventure Maina bio
6. **Next Production** — August 15, 2026 at Kenya National Theater
7. **Contact** — WhatsApp contact, waitlist placeholder

---

## Development Workflow

### When to Make Changes

Edits are permitted only for:

* **Production updates** (show title, dates, venue when finalized)
* **Content refinements** (clarity improvements after reflection)
* **Email list integration** (when Mailchimp/equivalent is set up)
* **Show-specific images** (replace production-teaser.jpg with actual poster)
* **Clear errors or broken links**

**Do NOT make:**
* Random design changes
* Brand messaging dilution
* Impulsive rewrites
* Experiments with layout/colors

---

### Local Editing Rule

**Never edit files directly on GitHub.**

Always:

1. Open project locally in VS Code
2. Use Live Server extension for live preview
3. Make changes and test thoroughly
4. Commit with clear message
5. Push to deploy

---

### Testing Checklist (Before Every Commit)

- [ ] Page loads without errors in Live Server
- [ ] All navigation links work
- [ ] Phone and WhatsApp links function
- [ ] Theme toggle works (dark ↔ light)
- [ ] All 3 images load correctly
- [ ] Layout works on mobile (resize to 375px)
- [ ] Content reads clearly top-to-bottom
- [ ] No console errors in browser DevTools

---

### Commit Discipline

Each change must have its own semantic commit.

**Good commit messages:**
```
Add email waitlist form with Mailchimp
Update production title to "Dangerous Liaisons"
Replace production teaser with show poster
Fix WhatsApp link formatting
```

**Bad commit messages:**
```
update
changes
fix stuff
WIP
```

If the message is vague, the change was not deliberate.

---

### Deployment Workflow

Deployment is automatic via Vercel:
```
Local edit → git add → git commit → git push → Vercel auto-deploy (~60s)
```

**Live URL:** https://digital-ascend-arts.vercel.app/

Manual redeploys are only needed if auto-deploy fails (rare).

---

## Brand Assets

### Color Palette (Contemporary Edge)

**Dark Mode (Default):**
* Primary Background: `#0f1419`
* Secondary Background: `#1a1a1a`
* Text Primary: `#ffffff`
* Text Secondary: `#c9d1d9`
* Accent: `#4a7ba7`
* Accent Bright: `#8ab4f8`

**Light Mode:**
* Primary Background: `#ffffff`
* Secondary Background: `#f2f4f7`
* Text Primary: `#0f1419`
* Text Secondary: `#1a1a1a`
* Accent: `#1e3a5f`

### Typography

**Font:** Space Grotesk (Google Fonts)

**Weights Used:**
* 400 (Regular) — Body text
* 500 (Medium) — Navigation, labels
* 600 (Semibold) — Subheadings, features
* 700 (Bold) — Hero headline

### Images

**Current Images:**
1. `hero-background.jpg` — Theatrical stage with dramatic lighting
2. `production-teaser.jpg` — Abstract hands reaching (placeholder)
3. `immersive-staging.jpg` — Intimate theater staging

**Future Image Updates:**
* Replace `production-teaser.jpg` with actual show poster when available
* Add high-res production stills to `/assets/images/` as shows are produced

**Image Requirements:**
* Format: JPG (optimized via TinyPNG)
* Max file size: 300KB per image
* Dimensions: 1920px wide maximum
* Color grading: Midnight blue, burgundy, gold accents (brand palette)

---

## Content Governance

### Messaging Guardrails

**Always emphasize:**
* Romantic Thriller Theater (category)
* Entertainment-first, zero educational agenda
* 18+ sophisticated maturity
* Quarterly production schedule
* Immersive staging

**Never say:**
* "Physical theatre" without context
* "Exploration over spectacle"
* Academic/grant-seeking language
* Vague artistic mission statements

### Update Priorities

**High Priority (Update Immediately):**
* Show title announcement
* Ticket sale dates
* Venue confirmations
* Email list integration

**Medium Priority (Update Within 1 Week):**
* Production images/poster
* Cast announcements
* Behind-the-scenes content links

**Low Priority (Review Quarterly):**
* About/Philosophy wording refinements
* Founder bio updates
* Footer content

---

## Integration Roadmap

### Current State (January 2026)
* Standalone marketing site
* Static HTML/CSS
* Manual content updates

### Phase 2 (March-April 2026)
* Add email list capture (Mailchimp embed)
* Update with actual show title and poster
* Link to ticketing platform when live

### Phase 3 (Post-Ticketing Platform Launch)
* Integrate this landing page as `/` route in Next.js platform
* Unified site: Marketing + Shows + Booking + Payment
* Single domain, cohesive user journey

This site will eventually become the homepage of the full platform, not a separate property.

---

## Deployment Details

**Hosting:** Vercel  
**Source:** GitHub repository `digital-ascend-arts`  
**Environment:** Production only (no staging)  
**Custom Domain:** (To be configured when purchased)

**Security Settings:**
* Deployment Protection: OFF (public site)
* Git Fork Protection: ON
* HTTPS: Enforced by Vercel

---

## Performance Notes

**Current Metrics:**
* Load time: <2 seconds
* Lighthouse Score: 95+ (Performance)
* Mobile-friendly: Yes
* Image optimization: Applied via TinyPNG

**Monitoring:**
* Vercel Analytics: Enabled
* Google Analytics: (To be added when privacy policy created)

---

## Status History

**January 3, 2026:** Complete rebuild
* Repositioned from "physical theatre" to "Romantic Thriller Theater"
* Added 3 AI-generated images (DALL-E 3)
* Implemented Contemporary Edge color palette
* Structured for ticket sales and category creation
* Deployed to production

**December 2025:** Initial launch
* Generic arts institution positioning
* No images, minimal content
* Placeholder site

---

## Review Cycle

**Monthly:** Check for outdated production information  
**Quarterly:** Read site as first-time visitor, assess clarity  
**Annually:** Review full brand alignment with business strategy

**Question to ask:** *Does this site still position us as the category creator for Romantic Thriller Theater?*

If yes, leave it alone. If no, make targeted edits.

---

## Current Status

✅ **Production-ready and complete**

This site successfully communicates:
* What we create (Romantic Thriller Theater)
* Who it's for (Adults 25-45 seeking entertainment)
* When to engage (August 15, 2026 production)
* How to connect (WhatsApp contact)

Further changes should be **strategic**, not habitual.

---

## Maintainer

**Bonaventure Maina**  
Founder & Creative Director  
Digital Ascend Arts Production

---

## License

All content © 2026 Digital Ascend Arts Production. All rights reserved.

Brand assets (logo, images, content) are proprietary and may not be reused without permission.

Code (HTML/CSS structure) may be referenced for learning purposes with attribution.