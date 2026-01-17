# Copilot Instructions for doula-website

## Project Overview
- This is a static website for a doula service, promoting birth and postpartum support, workshops, and community events.
- The site is deployed to GitHub Pages via a workflow in `.github/workflows/deploy.yml`.
- The custom domain is set via the `CNAME` file: `camillepaget.com`.

## Structure & Key Files
- Main HTML pages: `index.html`, `about.html`, `services.html`, `testimonials.html`, `contact.html`, `test.html` (CSS test page)
- Shared assets:
  - CSS: `assets/css/styles.css` (site-wide dark, modern theme, responsive, custom gradients)
  - JS: `assets/js/main.js` (brand name, mobile nav, active link highlighting)
  - Images: `assets/img/`
- Navigation and footer are repeated in all HTML files for consistency.

## Patterns & Conventions
- Navigation links are styled and highlighted based on the current page (see `main.js`).
- Brand name is set globally via JS (`BRAND_NAME`).
- Responsive design: CSS uses grid layouts and media queries for mobile.
- All pages include a script to update the copyright year.
- Calls to action (email, Instagram) are consistent across pages.
- Testimonial and service content is static; no dynamic data or backend.

## Developer Workflows
- **Deploy:** Push to `main` branch triggers GitHub Actions workflow to deploy to Pages.
- **Test CSS:** Open `test.html` in a browser to verify CSS loads (should see dark/modern style).
- **Add Pages:** Duplicate an existing HTML file for new pages; update nav links and content.
- **Update Styles:** Edit `assets/css/styles.css` for global or component-level changes.
- **Update JS:** Edit `assets/js/main.js` for nav or brand logic.

## Integration & External Dependencies
- No build tools, frameworks, or package managers are used.
- No external JS/CSS dependencies; all styling and scripts are local.
- Deployment and domain config are handled by GitHub Actions and the `CNAME` file.

## Examples
- To add a new service, update `services.html` and, if needed, add images to `assets/img/`.
- To change the brand, update the `BRAND_NAME` in `main.js` and the nav in each HTML file.

## Tips for AI Agents
- Maintain consistent navigation and footer across all pages.
- Follow the CSS and HTML structure for cards, grids, and CTAs.
- Do not introduce frameworks or external dependencies.
- Reference `test.html` to verify CSS changes.
- Use the GitHub Actions workflow as the only deployment method.
