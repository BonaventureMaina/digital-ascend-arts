# Digital Ascend Arts Production — Website

This repository contains the official single-page website for **Digital Ascend Arts Production**.

The site is intentionally minimalist, content-focused, and designed to serve as a credible public-facing presence for an arts institution.

---

## Purpose of This Repository

* Public website for Digital Ascend Arts Production
* Communicates artistic identity, philosophy, and contact information
* Deployed as a static site via **Vercel**
* Designed for clarity, longevity, and ease of maintenance

This is not an experimental or tutorial project. Changes should be deliberate.

---

## Technology Stack

* **HTML5** — Semantic structure
* **CSS3** — Layout, typography, and responsive design
* **Google Fonts** — Space Grotesk
* **Git + GitHub** — Version control
* **Vercel** — Hosting and deployment

No frameworks. No build tools. No JavaScript.

---

## Project Structure

```
digital-ascend-arts/
├── index.html
├── css/
│   └── styles.css
├── .gitignore
└── README.md
```

---

## Development Workflow (Authoritative)

This workflow exists to prevent random changes, regressions, and design drift.

### 1. When to Make Changes

Edits are permitted only for:

* Content updates (About, Philosophy, Founder, Productions)
* Adding a new production or section
* Fixing clear errors
* Improving clarity after reflection

Avoid impulsive or purely cosmetic changes.

---

### 2. Local Editing Rule

**Never edit files directly on GitHub.**

Always:

1. Open the project locally in VS Code
2. Make changes
3. Test in a browser
4. Commit and push

---

### 3. Local Testing Checklist (Before Every Commit)

Confirm all of the following:

* Page loads without errors
* Navigation links work
* Layout works on mobile and desktop
* Phone and WhatsApp links function correctly
* Content reads clearly top-to-bottom

If any item fails, fix it before committing.

---

### 4. Commit Discipline

Each logical change must have its own commit.

**Good commit messages:**

```
Refine Artistic Philosophy wording
Add Founder section
Update Productions placeholder text
```

**Bad commit messages:**

```
update
fix
changes
```

If the message is vague, the change was not well-considered.

---

### 5. Deployment Workflow

Deployment is automatic via Vercel:

```
Local edit → git commit → git push → Vercel auto-deploy
```

Manual redeploys are only used if a deployment fails.

---

## Deployment

* Hosting: **Vercel**
* Source: GitHub repository
* Environment: Production only (no staging)

Security notes:

* Deployment protection: OFF
* Git fork protection: ON

The site is intended to be publicly accessible without authentication.

---

## Content Governance

* Small edits are preferred over large rewrites
* Major rewrites should be delayed at least 24 hours
* The site should remain calm, minimal, and intentional

Restraint is part of the design.

---

## Review Cycle

Every few months:

* Read the site as if you are a first-time visitor
* Ask: *Does this still sound like us?*
* Make **one focused edit session at most**

---

## Status

This site is **live, production-ready, and complete**.

Further changes should be intentional, not habitual.
