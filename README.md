# DomainX Website Starter

A responsive front-end starter for DomainX, powered by Emo Global Solutions.

## Files
- `index.html` — website structure
- `style.css` — responsive design
- `app.js` — domain catalogue, 70% pricing calculation and enquiry links

## Pricing
The site calculates 70% of the registrar prices supplied:
- `.org`, `.app`, `.io`, `.dev` use the promotional price as first-year cost where supplied.
- Renewal prices use the regular renewal price supplied.
- All displayed amounts are USD and rounded to two decimal places.

## Publish with GitHub Pages
1. Create a GitHub repository named `DomainX` (or your preferred repository name).
2. Upload `index.html`, `style.css`, `app.js`, and `README.md` to the repository root.
3. Open repository **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the website.

## Important: before taking real domain orders
This is a front-end prototype. The search results are illustrative and do not check live availability. The enquiry button opens an email draft; it does not register a domain or collect payment.

For real registrations, DomainX needs:
1. A domain registrar/reseller account and API access.
2. A secure backend/serverless function to keep API credentials private.
3. Live availability and final-price checks from the registrar.
4. Secure payment processing and order confirmation.
5. A workflow for registration, renewal, transfer, DNS and customer support.

Never put registrar API secrets or payment secret keys in `app.js` or any public GitHub repository.

## Contact
Emo Global Solutions: emoglobalsolutions@gmail.com