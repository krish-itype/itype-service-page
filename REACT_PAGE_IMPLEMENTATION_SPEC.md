# Itype Service Page — React Rebuild Specification

## 1. Document status

- **Purpose:** implementation and deployment specification created before React development begins.
- **Target page:** `https://itypedesigns.com/service-based-website-development-company/`
- **Source page:** the existing WordPress/Elementor page at the same URL.
- **Scope status:** confirmed by the project owner.
- **Implementation status:** Parts 0-14 are complete. Part 15 UI and submission states are complete; the production hosted-form endpoint is still required. Part 16 local QA is complete; production deployment and delivery verification remain.
- **Deployment target:** the existing RunCloud-managed server and existing `itypedesigns.com` domain.
- **Last reviewed:** 5 November 2026.

## 2. Objective

Rebuild only the service-based website development landing page as a maintainable React page while preserving the rest of the Itype Design WordPress website. The visual design and UI must be a faithful recreation of the current live page, not a redesign or a design-system reinterpretation.

The new page must:

- Keep the existing public URL unchanged.
- Reproduce the current page's content, layout, visual styling, calls to action, interactions, and responsive behavior as closely as the browser-rendered source permits.
- Improve implementation quality, accessibility, performance, and maintainability.
- Avoid requiring a custom application backend.
- Submit consultation enquiries through an approved hosted form provider.
- Coexist safely with the existing WordPress application.

## 3. Confirmed scope

### Included

- The single URL `/service-based-website-development-company/`.
- Desktop, tablet, and mobile layouts.
- Existing header treatment as it appears on this landing page.
- Hero content and consultation form.
- Consultation modal/popup.
- Problem, services, benefits, process, results, statistics, testimonials, FAQ, final CTA, and footer sections.
- Interactive accordion, carousel, animated counters, modal, responsive menu behavior, and floating contact action.
- SEO metadata and structured data for this page.
- Analytics hooks required for CTA and form measurement.
- Static production build suitable for RunCloud/Nginx.
- Nginx routing plan that affects only the target path.

### Excluded

- Rebuilding the Itype Design home page or any other page.
- Replacing WordPress, `/wp-admin/`, the WordPress database, theme, or plugins for the rest of the website.
- Building a custom CMS.
- Building a custom form-processing backend or database.
- Changing the public URL.
- Redesigning the wider site's navigation architecture.

## 4. Technical architecture

### Recommended stack

- **Framework:** Next.js with React and TypeScript.
- **Rendering:** static export; no long-running Node.js server in production.
- **Styling:** Tailwind CSS utilities in React components. `globals.css` is limited to Tailwind theme declarations, font loading, resets, and truly global defaults. Component CSS files are not allowed unless the owner explicitly approves an exception.
- **Component theme library:** none. DaisyUI must not be installed for this recreation.
- **Interactions:** small React components; no jQuery or Elementor runtime.
- **Forms:** Formspree, subject to the owner providing or approving the production form endpoint.
- **Hosting:** static files served by the existing RunCloud-managed Nginx server.

Next.js is used as a React framework because this is an SEO-focused marketing page. The output remains static and does not introduce a backend.

DaisyUI is intentionally excluded because its opinionated component dimensions, spacing, radii, colors, shadows, modal behavior, and form styling would have to be overridden to match the source. Buttons, fields, cards, accordion rows, modal surfaces, and navigation will be implemented directly from measured source styles using Tailwind utilities and shared project tokens.

### Production behavior

```text
/service-based-website-development-company/  -> new static React page
/service-based-website-development-company/* -> assets/fallbacks owned by the new page
/wp-admin/*                                   -> existing WordPress
/wp-json/*                                    -> existing WordPress
all other public routes                       -> existing WordPress
```

### Build-output requirements

- Static export must generate a directly servable `index.html` for the target route.
- All new-page assets must be namespaced so they cannot collide with WordPress or Elementor assets.
- Asset URLs must work from the nested production path.
- The build must not overwrite WordPress's root `index.php`, `.htaccess`, uploads, plugins, or theme files.
- Directly loading or refreshing the target URL must return the React page, not a WordPress 404.
- The production build must not depend on a local development server.

## 5. Existing-page inventory

The source is a WordPress page built with Elementor/Elementor Pro. It currently uses WordPress AJAX for form submission, Swiper for carousels, Elementor accordions and popups, and custom phone-field JavaScript.

Verified external/runtime dependencies on the current page include:

- Elementor and Elementor Pro.
- WordPress `admin-ajax.php` and REST URLs.
- Swiper.
- Google Tag Manager container `GTM-WPCMMNM2`.
- Google Fonts.
- An international phone-input utility.

The React version should replace these page-level dependencies with native React implementations or focused packages. It must not load Elementor, jQuery, WordPress emoji scripts, or WordPress page CSS.

## 6. Brand and design system

### Primary desktop visual reference

- Reference file: [`references/desktop-live-page-1920x1080.png`](references/desktop-live-page-1920x1080.png).
- Part 4 reference: [`references/image2.png`](references/image2.png), supplied by the project owner as the close visual baseline for the trust-strip boundary and website-problems section.
- Part 5 reference: [`references/image3.png`](references/image3.png), supplied by the project owner as the desktop visual baseline for the website-development-services section.
- Future section reference: [`references/image4.png`](references/image4.png), supplied by the project owner for the website-review CTA and the following business-growth section.
- Captured from the live page on 5 November 2026 at a 1920 x 1080 screen size.
- Use this image as the primary visual baseline for the header, hero, consultation form, and trust strip while implementing Parts 1-3.
- Match the page content only. Browser chrome, the Windows taskbar, the Windows activation watermark, and other operating-system UI in the capture are not part of the website.
- The page's floating WhatsApp control is part of the website and remains in scope for Part 14.
- Primary copy must render in the same solid black/near-black treatment as the reference; orange is reserved for the source's accent and highlight treatments.

### Visual-fidelity requirement

The existing live page is the visual source of truth. Implementation must match it at the agreed reference viewports, including:

- Section order and section boundaries.
- Container widths, column proportions, gaps, padding, and vertical rhythm.
- Font families, weights, sizes, line heights, letter spacing, and deliberate line breaks.
- Background colors, borders, shadows, dividers, and accent treatments.
- Button, input, select, modal, accordion, carousel, and floating-action styling.
- Logo dimensions and placement.
- Desktop, tablet, and mobile reflow behavior.
- Hover, focus, active, open, loading, success, and error states.

The implementation may change invisible semantics and internal code structure for accessibility, performance, and maintainability, but those changes must not unnecessarily alter the visible UI. Any intentional visible deviation requires owner approval and must be recorded in this document.

Visual comparison should use screenshots of the live page and React build at the same viewport widths. The target is no obvious visible mismatch when images are compared side by side. Pixel-level differences caused by browser font rasterization are acceptable; different layouts, generic component-library styling, or approximate spacing are not.

### Verified typography

The live page loads:

- Plus Jakarta Sans.
- Archivo.
- Inter.

Implementation should map these fonts deliberately rather than carrying over Elementor's global-variable indirection. Suggested roles:

- **Display headings:** Archivo or Plus Jakarta Sans, matching the source after visual comparison.
- **Body and controls:** Plus Jakarta Sans.
- **Utility text/labels:** Inter where required by the source.

Fonts should be self-hosted if licensing and source files permit; otherwise use optimized Google Font loading with `display: swap`.

### Verified color palette

Common colors extracted from the live page's page-specific CSS:

| Role | Value |
| --- | --- |
| Primary accent | `#ff3d00` |
| Secondary accent variant | `#f53101` |
| Black | `#000000` |
| White | `#ffffff` |
| Warm section background | `#f4f4f2` |
| Light border | `#d4d4d4` |
| Secondary border | `#e6e6e6` |
| Primary muted text | `#4e4e4e` |
| Secondary text | `#333333` |
| Disabled/subtle text | `#a9a9a9` |

Final token selection must use contrast-safe combinations. Accent text on white and white text on the accent must meet WCAG AA where applicable.

### Logo assets observed on the live page

- Black logo: `https://itypedesigns.com/wp-content/uploads/2026/05/Logo_black_683fd8d8d2545-scaled-1.webp`
- White logo: `https://itypedesigns.com/wp-content/uploads/2026/05/Logo_white_683fd8dd2c812-scaled-1.webp`

Production should use local optimized copies, subject to authorization, rather than hotlinking the WordPress upload URLs.

### Visual language

- Strong black-and-white editorial layout.
- Bright orange-red accent for highlighted copy, checkmarks, CTA buttons, and selected details.
- Large, heavy headings with compact line height.
- Alternating white, warm-neutral, and black sections.
- Clear rectangular buttons and form controls.
- Restrained use of rounded corners; match the source rather than applying generic card styling.
- Generous vertical rhythm on desktop with tighter, readable spacing on mobile.

## 7. Page structure and content

Content below was extracted from the live page and should be preserved unless the owner approves copy changes.

### 7.1 Header

- Black Itype logo on a white background.
- Phone action: `+91 9898754737` linked with `tel:+919898754737`.
- Primary CTA: **Book a Free Consultation**.
- CTA opens the consultation modal.
- Mobile layout must keep the logo and primary action usable without clipping.

### 7.2 Hero and primary lead form

- Eyebrow: **Website Development Services**.
- Main heading: **Professional websites built to turn visitors into enquiries.**
- Introductory copy:

  > We're a website development company that designs and builds fast, SEO-ready business websites. Every page is planned to help your customers understand what you offer and get in touch.

- Benefits:

  - Custom website design and development, no templates.
  - SEO-ready, fast and mobile-friendly from day one.
  - Built to work with Google Ads and your marketing.

- Form-side heading: **Get a free website consultation**.
- Form-side qualifier: **Free · No obligation**.
- Supporting copy: **A 30-minute call on your website and where it's losing enquiries. No pressure, no jargon.**
- Trust line: **We reply within one working day. Takes about 30 seconds. A real person, not an automated call.**
- Primary form CTA: **Get My Free Quote**.

### 7.3 Trust strip

Items observed in the source:

- Custom-built websites.
- Conversion-focused design.
- SEO & Google Ads-ready.
- Fast & mobile-first.

### 7.4 Problem section

- Heading: **Your website should bring you customers, not turn them away.**
- Intro: **If your site gets visitors but few enquiries, one of these is usually the reason.**
- Problems and consequences:

  - It looks outdated next to competitors — visitors doubt the business before they call.
  - Visitors cannot tell what the business offers — people leave when the message is unclear.
  - Traffic arrives but enquiries do not — paid clicks fail to become leads.
  - Google Ads pages do not convert — higher cost per lead and wasted spend.
  - The site does not work well on mobile — mobile visitors leave a slow or clumsy experience.
  - There is no clear next step — interested visitors do not know how to make contact.

### 7.5 Comparison/value section

- Heading: **Not just a website. A website that wins business.**
- Negative-state themes:

  - Talks about the company, not the customer.
  - Weak or hidden contact options.
  - Slow and hard to use on mobile.

- Desired-state themes:

  - Modern, trustworthy design.
  - Customer-focused messaging.
  - Clear calls to action on every page.
  - Reviews, results, and credentials visible.
  - Fast, mobile-friendly experience.

### 7.6 Website development services

- Section label: **Our website development services**.
- Intro: **Strategy, design and development working together for one goal: turning visitors into customers.**

| No. | Service | Description |
| --- | --- | --- |
| 01 | Strategy & Planning | We map your services, customers and goals before any design starts. |
| 02 | Website Design | Clean, professional layouts that build trust and guide visitors to act. |
| 03 | SEO Foundations | Fast, well-structured pages that help you rank on Google. |
| 04 | Custom Development | Secure, scalable builds with an easy CMS your team can update. |
| 05 | Landing Pages for Ads | High-converting pages that match your Google Ads and lower lead costs. |
| 06 | Tracking & Leads | See which pages and campaigns bring enquiries, then improve them. |

### 7.7 Website review CTA

- Heading: **Find out why your website isn't getting enquiries.**
- Copy: **Book a free consultation. We'll review your site with you and show you what to fix first.**
- CTA: **Get a Free Website Review**.
- Opens the consultation modal.

### 7.8 Business-growth benefits

- Heading: **A website built to grow your business, not just look good.**

| Benefit | Description |
| --- | --- |
| Strategy before design | We learn your business before designing a single page. |
| Built around your customers | Content and structure follow how your buyers decide. |
| Conversion-focused | Every page has a clear purpose and a clear call to action. |
| SEO-ready | Built to help you get found on Google from launch. |
| Google Ads-friendly | Pages that improve Quality Score and make ad spend work harder. |
| Mobile-first | Fast, easy to use and built to convert on every device. |

### 7.9 Process

- Heading: **A simple, low-risk process from first call to launch.**

| No. | Stage | Description |
| --- | --- | --- |
| 01 | Free Consultation | We discuss your goals, budget and timeline, then send a clear quote. |
| 02 | Strategy & Design | Sitemap, wireframes and designs you review and approve. |
| 03 | Build & Test | We develop, optimise for speed and SEO, and set up lead tracking. |
| 04 | Launch & Support | We go live, measure results and keep improving. |

### 7.10 Results and statistics

- Results heading: **From online brochure to lead generator.**
- Statistics observed:

  - `1,000+` Websites Delivered.
  - `20+` Years Experience.
  - `25+` Industries Served.
  - `4.9` Client Rating.

Counters should animate once when scrolled into view and must show their final value when reduced motion is requested or JavaScript is unavailable.

### 7.11 Testimonials

- Heading: **Businesses that trust us with their websites.**
- Use an accessible carousel on small screens and a stable multi-column layout where space permits.
- Existing testimonial names, roles, ratings, and quotes must be copied exactly during implementation; do not invent testimonials.
- Controls require visible focus states and accessible names.
- Auto-rotation should be avoided or pause on hover/focus and respect reduced-motion preferences.

### 7.12 FAQ

- Heading: **Your questions, answered simply.**
- Use semantic buttons or `<details>`/`<summary>` behavior.
- Only one item may be open at a time if matching the source; opening multiple items is acceptable only if visual QA shows it is preferable.
- FAQ content:

1. **How much does website development cost?**
   It depends on the number of pages, design needs, features and integrations. After a free consultation, you get a clear, fixed quote before any work begins, with no hidden costs.
2. **How long does it take to build a website?**
   Most business websites take 4 to 8 weeks from approved plan to launch. Larger custom builds take longer. We'll give you a timeline with your quote.
3. **Can you redesign my existing website?**
   Yes. We review what's working, fix what isn't and rebuild it to bring in more enquiries, keeping your SEO rankings protected during the move.
4. **Will my website work with Google Ads and SEO?**
   Yes. Every site is built with SEO basics, fast load times and ad-ready landing pages to help you rank and lower your cost per lead.
5. **Can you connect my CRM and enquiry forms?**
   Yes. We connect forms to your CRM, email or WhatsApp so every lead reaches the right person quickly.
6. **What happens on the free consultation?**
   A 30-minute call to understand your business, review your current site and recommend the right approach. No sales pressure, just clear advice.

### 7.13 Final CTA

- Heading: **Get a website that brings in more customers.**
- Supporting text: **Your first call is about your business, not a sales pitch. We'll cover:**
- Review points:

  - The current website and where it is losing enquiries.
  - Business goals, customers, and competitors.
  - Quick wins that can be acted on immediately.
  - A clear quote and timeline.

- Secondary contact prompt: **Prefer to talk now? Call us directly.**
- Telephone CTA: **Talk to Us**.
- Primary CTA: **Get My Free Quote**.
- Trust line: **We reply within one working day. No obligation.**

### 7.14 Footer

- White logo on black background.
- Summary copy:

  > We design and develop professional websites for businesses, helping them attract the right visitors, explain their value clearly and turn traffic into enquiries.

- Email: `sales@itype.design`.
- Phone: `+91 9898754737`.
- Footer note: **© 2026 ITYPE. All rights reserved. | Professional website design services for businesses.**
- Existing footer navigation links should continue pointing to the WordPress pages.

## 8. Component model

Suggested component tree:

```text
ServiceWebsitePage
├── LandingHeader
├── HeroSection
│   ├── HeroContent
│   └── ConsultationForm
├── TrustStrip
├── ProblemSection
├── BeforeAfterSection
├── ServicesSection
│   └── ServiceItem[]
├── WebsiteReviewCallout
├── BenefitsSection
│   └── BenefitItem[]
├── ProcessSection
│   └── ProcessStep[]
├── ResultsSection
├── StatsSection
│   └── AnimatedStat[]
├── TestimonialsSection
│   └── TestimonialCarousel
├── FaqSection
│   └── AccordionItem[]
├── FinalCtaSection
├── LandingFooter
├── ConsultationModal
│   └── ConsultationForm
└── FloatingContactButton
```

Repeated content must be data-driven. The form, service cards, benefits, process steps, statistics, testimonials, and FAQs should not be duplicated as separate desktop/mobile markup.

## 9. Forms

### Primary form fields

The existing consultation form contains:

- Name — text, required.
- Work email — email, required.
- Phone / WhatsApp — international phone input, required.
- Budget — select, required.

Budget choices:

- Choose A Range.
- Rs. 20,000 - Rs. 40,000.
- Rs. 40,000 - Rs. 60,000.
- Rs. 60,000 - Rs. 1,20,000.
- More than Rs. 1,20,000.

### Existing secondary/footer form choices

Website type:

- Business Website.
- E-commerce Website.
- Portfolio Website.
- Landing Page.
- Blog.
- Other.

Secondary budget choices:

- Rs. 15,000 - Rs. 25,000.
- Rs. 25,000 - Rs. 40,000.
- More than Rs. 40,000.

The owner must confirm whether the React rebuild should retain both form variants or standardize all CTAs on the primary consultation form. The recommended implementation is one consistent form component unless lead-routing requirements differ.

### Submission behavior

- Submit through Formspree or another owner-approved hosted endpoint.
- Do not call WordPress `admin-ajax.php` from the new page.
- Validate required fields in the browser.
- Normalize phone numbers with country code before submission.
- Disable duplicate submission while a request is in progress.
- Show clear inline validation messages.
- Show an accessible success state without navigating away unless a tracked thank-you page is intentionally added.
- Show a retryable failure state.
- Include page URL, timestamp, campaign/UTM parameters, and form location as hidden metadata.
- Add a honeypot and the form provider's recommended spam protection.
- Do not expose private API keys in the browser bundle.
- Privacy/consent language must be confirmed before launch.

### Modal behavior

- Open from all consultation/quote CTAs.
- Trap keyboard focus while open.
- Close on the close button and Escape.
- Restore focus to the trigger after closing.
- Prevent background scrolling.
- Do not automatically open on initial page load unless the owner explicitly requests that behavior.
- On mobile, use a full-height scrollable sheet so all fields and the submit button remain reachable.

## 10. Responsive behavior

### Breakpoint intent

- **Mobile:** up to approximately 500 px, matching the current Elementor mobile breakpoint.
- **Tablet:** 501–768 px.
- **Tablet landscape/small laptop:** 769–1024 px.
- **Desktop:** 1025 px and above.
- **Large desktop:** optimize content width without allowing lines or cards to become excessively wide.

### Requirements

- No horizontal overflow at 320 px viewport width.
- Touch targets at least 44 by 44 CSS pixels.
- Hero changes from two columns to one column on small screens.
- Multi-column service, benefit, process, and statistics layouts collapse cleanly.
- CTA buttons remain fully visible and readable.
- Form fields use at least 16 px text on mobile to avoid browser zoom.
- Navigation and modal must remain usable at 200% browser zoom.
- Large headings use fluid sizing with controlled line breaks.
- Sections must not rely on fixed heights.

## 11. Accessibility requirements

- Target WCAG 2.2 AA for the page.
- One logical `h1`; headings descend without skipped levels.
- The current source exposes many major headings as `h2`; the rebuild must correct the document outline.
- Full keyboard access to links, buttons, carousel controls, accordions, modal, and forms.
- Visible focus indicators.
- Correct input labels, autocomplete attributes, error associations, and status announcements.
- Decorative icons hidden from assistive technology.
- Meaningful images receive accurate alt text; decorative images use empty alt text.
- Respect `prefers-reduced-motion`.
- Avoid content that only appears on hover.

## 12. SEO and metadata

### Current verified metadata

- Title: **Service Based Website Development Company - Itype Design**.
- Open Graph type: `article`.
- Open Graph URL: the existing target URL.
- Twitter card: `summary_large_image`.
- Current page includes WebPage, BreadcrumbList, and WebSite JSON-LD through Yoast.

### Required implementation

- Preserve or intentionally improve the title and meta description.
- Add a canonical URL pointing to the existing target URL.
- Provide Open Graph and Twitter metadata, including an approved social image.
- Recreate appropriate WebPage and BreadcrumbList JSON-LD.
- Add FAQPage structured data only if the on-page FAQ remains visible and the markup complies with current search-engine policies.
- Preserve meaningful internal links to existing WordPress pages.
- Generate correct absolute URLs in metadata.

### Critical indexing issue

The live source currently outputs:

```html
<meta name="robots" content="noindex, nofollow">
```

This would prevent the page from being indexed. It must not be copied blindly. Before launch, the owner/SEO lead must explicitly choose one of the following:

- `index, follow` for a public organic landing page; or
- `noindex, nofollow` if the page is intentionally limited to paid campaigns or private testing.

Production and staging indexing rules must be different: staging should remain noindex, while production follows the approved SEO decision.

## 13. Analytics and conversion tracking

- Confirm whether the new page should continue using GTM container `GTM-WPCMMNM2`.
- Avoid loading the same GTM container twice through both WordPress and the React page.
- Track at minimum:

  - Header phone click.
  - Header consultation CTA click.
  - Hero form start.
  - Hero form success/failure.
  - Modal open and close.
  - Modal form success/failure.
  - Website review CTA click.
  - Final phone CTA click.
  - Final quote CTA click.
  - WhatsApp/floating contact click.

- Preserve UTM parameters with lead submissions.
- Final event names and ad-platform conversions require approval from the analytics owner.

## 14. Performance requirements

- No Elementor, jQuery, WordPress frontend, or unused carousel bundles.
- Optimize logo and content images as WebP/AVIF where appropriate.
- Set explicit image dimensions to reduce layout shift.
- Lazy-load below-the-fold images; do not lazy-load the primary above-the-fold visual.
- Load only font weights actually used.
- Minimize client-side JavaScript and hydrate only interactive components where practical.
- Avoid autoplay video and heavy background effects.
- Target Lighthouse scores on a production-like mobile run:

  - Performance: 90 or higher.
  - Accessibility: 95 or higher.
  - Best Practices: 95 or higher.
  - SEO: 95 or higher, subject to the approved robots directive.

- Target Core Web Vitals:

  - LCP at or below 2.5 seconds.
  - CLS at or below 0.1.
  - INP at or below 200 milliseconds.

## 15. RunCloud deployment design

### Recommended isolation

Store the static React build in a directory separate from the WordPress application files. Configure the existing WordPress web application's Nginx settings through the RunCloud dashboard to route only the target path to that directory.

Do not directly edit RunCloud-generated Nginx files because RunCloud can overwrite them when rebuilding the application configuration.

### Safe release sequence

1. Back up the WordPress application and database.
2. Keep the existing WordPress page published during development.
3. Deploy the static build to an isolated staging directory and test it through a temporary protected route or test host.
4. Validate page appearance, forms, analytics, metadata, accessibility, and direct URL loading.
5. Add and validate the path-specific Nginx rule in RunCloud.
6. Switch only `/service-based-website-development-company/` to the static build.
7. Keep the original WordPress page content available as a draft or rollback source.
8. Run production smoke tests.
9. Monitor server errors, form delivery, analytics, and conversion events.

### Rollback

- Disable/remove the path-specific Nginx rule through RunCloud.
- Restore WordPress handling for the URL.
- Republish the preserved WordPress page if it was changed to draft.
- No DNS change should be required for rollback.

## 16. Testing plan

### Functional

- Every CTA performs the intended action.
- Telephone and email links use correct URI schemes.
- Modal opens and closes correctly from every trigger.
- Forms validate, submit once, show success, and handle failure.
- UTM values reach the lead notification.
- Accordion and carousel work with mouse, touch, and keyboard.
- Internal WordPress links remain correct.
- Direct refresh at the production URL works.

### Responsive/browser matrix

- Chrome, Edge, Firefox, and Safari current stable versions.
- iOS Safari and Android Chrome.
- Representative widths: 320, 375, 390, 500, 768, 1024, 1280, 1440, and 1920 px.

### Visual regression

- Compare the React build with the current page at desktop, tablet, and mobile widths.
- Preserve brand, content order, hierarchy, and CTA prominence.
- Improvements are allowed for accessibility, spacing consistency, mobile usability, and performance.
- Run visual comparisons in a clean browser profile or an Incognito window with extensions disabled. Attributes such as `bis_skin_checked`, `bis_register`, or `__processed_*` are injected by browser/security extensions and can cause a development-only React hydration warning even when the server and client application markup match.

### SEO/deployment

- Correct HTTP 200 at the target URL.
- All other WordPress URLs remain unchanged.
- Canonical, robots directive, metadata, and JSON-LD match the approved configuration.
- No mixed-content or missing-asset errors.
- No duplicate GTM initialization.
- Nginx configuration passes RunCloud's validation before activation.

## 17. Acceptance criteria

The page is complete when:

- The target URL is served by the new static React build.
- Every other Itype Design page remains served by WordPress.
- The page matches the approved visual reference on desktop and mobile.
- Side-by-side screenshots at 390, 768, 1024, and 1440 px show no unapproved differences in layout, typography, color, spacing, controls, or section styling.
- All approved source copy and verified business details are present.
- Forms deliver real test enquiries successfully.
- No custom backend or database is required.
- Keyboard, screen-reader, reduced-motion, and mobile behavior meet the stated requirements.
- Production build and direct-route loading pass.
- Analytics events are visible in the approved test/debug tools.
- SEO indexing behavior is explicitly approved.
- A tested rollback path exists.

## 18. Decisions and access required before production launch

- Confirm Formspree or alternative form provider and supply the production endpoint.
- Confirm the recipient email/CRM for enquiries.
- Confirm whether to keep one form variant or both existing variants.
- Confirm production robots directive (`index, follow` versus `noindex, nofollow`).
- Confirm GTM container and conversion-event requirements.
- Approve testimonial content and any result/case-study claims copied from WordPress.
- Confirm permission to download and bundle existing logo and page assets.
- Provide RunCloud access or coordinate the final Nginx route change with the server administrator.
- Confirm Git repository and deployment ownership.

## 19. Implementation sequence

1. Approve this specification and outstanding decisions.
2. Initialize the React/Next.js project.
3. Create typed page data and design tokens.
4. Build semantic static sections.
5. Implement form, modal, accordion, counter, carousel, and mobile behavior.
6. Add metadata, JSON-LD, analytics hooks, and error states.
7. Add and optimize approved assets.
8. Run type checks, production build, accessibility checks, and responsive visual QA.
9. Prepare the RunCloud static artifact and Nginx rule.
10. Deploy to staging, obtain approval, switch the single production path, and verify rollback.

## 20. UI implementation parts

The page will be implemented and approved one part at a time. Work must not move to the next part until the current part has been compared with the live page at its required reference widths and marked complete here.

### Status legend

- `[x]` Complete and verified.
- `[~]` In progress.
- `[ ]` Not started.

### Parts checklist

- `[x]` **Part 0 — Project foundation and assets**
  - Next.js static export configured for `/service-based-website-development-company/`.
  - Tailwind CSS available without DaisyUI.
  - Black logo, white logo, and site icon stored locally.
  - Production build generates `frontend/out`.
- `[x]` **Part 1 — Header**
  - White header surface.
  - Exact black-logo placement and responsive scaling.
  - Desktop telephone link with phone icon.
  - Orange consultation CTA.
  - Mobile phone visibility and CTA overflow behavior matched to the source.
  - Verify at 390, 768, 1024, and 1440 px.
- `[x]` **Part 2 — Hero and primary consultation form**
  - Grid background, eyebrow, headline treatment, intro, benefit list, dark form panel, and form controls.
- `[x]` **Part 3 — Trust strip**
  - Four dark-strip trust statements and check icons.
- `[x]` **Part 4 — Website problems section**
  - Section heading and six problem/consequence items.
- `[x]` **Part 5 — Website development services**
  - Six numbered service entries with exact typography, dividers, and responsive behavior.
- `[x]` **Part 6 — Website review CTA**
  - Orange callout, consultation trigger, and trust statements.
- `[x]` **Part 7 — Business-growth benefits**
  - Six benefit items and supporting copy.
- `[x]` **Part 8 — Four-step process**
  - Numbered consultation-to-support process layout.
- `[x]` **Part 9 — Before/after business-value comparison**
  - Negative and desired-state comparison presentation.
- `[x]` **Part 10 — Results and statistics**
  - Lead-generator result content and four counters.
- `[x]` **Part 11 — Testimonials**
  - Verified testimonial content, ratings, and responsive carousel/grid behavior.
- `[x]` **Part 12 — FAQ accordion**
  - Six verified questions and answers with accessible open/close behavior.
- `[x]` **Part 13 — Final CTA**
  - Review points, telephone action, quote CTA, and trust copy.
- `[x]` **Part 14 — Footer and floating contact action**
  - White logo, contact details, existing-site navigation, copyright, and floating WhatsApp action.
- `[~]` **Part 15 — Consultation modal and submission states**
  - Accessible modal, validation, loading, success, failure, and hosted form endpoint integration.
- `[~]` **Part 16 — Final visual regression and production readiness**
  - Full-page comparisons at 390, 768, 1024, and 1440 px.
  - Accessibility, metadata, analytics, build, RunCloud artifact, and rollback verification.

### Part completion rule

Each part is complete only when:

1. Its source markup and computed styles have been inspected or measured from the live page.
2. Desktop and mobile layouts match the corresponding live reference without an obvious visual difference.
3. Interactive states for that part work with keyboard and pointer input.
4. TypeScript and the production static build pass.
5. The part status and any approved deviations are recorded in this section.

### Part 1 verification record

- Completed on 5 November 2026.
- Live header markup and Elementor CSS were inspected directly.
- The exact live logo and phone SVG path are used.
- Pixel bounds for the header, content container, logo, phone link, and consultation CTA were compared at 390, 768, 1024, 1440, and 1536 px.
- Header height, container placement, phone placement, CTA placement, button dimensions, and CTA typography match the live computed values at every measured width.
- The phone uses live black `#000000`; the CTA uses live white `#ffffff` on orange `#fe3100`.
- Live Archivo typography is matched: phone `16px/24px` at weight `700`; CTA `15px/22.5px` on mobile, `16px/24px` through 1480 px, and `12.8px/19.2px` above 1480 px at weight `600`.
- Mobile and tablet padding, desktop padding, breakpoint container widths, and vertical scrollbar reservation reproduce the live header geometry.
- Responsive logo placement was reverified across 320, 375, 390, 499, 500, 501, 550, 598, 599, 600, 767, 768, 769, 900, 1023, 1024, 1025, 1280, 1439, 1440, 1479, 1480, 1481, 1536, and 1920 px.
- The header now reproduces the live nested container, flex-basis, flex-shrink, wrapping, and direct `100% / 73% / 36%` responsive logo sizing instead of using compensating logo-width approximations.
- Logo horizontal position and width match the live computed bounds at every measured width; vertical bounds differ only by subpixel rasterization.
- Header component styling is implemented with Tailwind utilities; no header CSS file remains.
- No approved visual deviations.

### Part 2 verification record

- Completed on 5 November 2026.
- The live hero markup, Elementor CSS, responsive rules, font declarations, form controls, and SVG check icon were inspected directly.
- The hero uses the measured `#f4f4f2` surface, two-axis 60 px grid, `0.9` grid opacity, exact responsive container widths, and the source column proportions.
- Headline, orange inline highlight, intro, benefit copy, divider, consultation card, fields, select control, submit button, and response-time copy reproduce the live typography, colors, spacing, borders, and shadow.
- Primary copy and list text render in the source's solid black treatment; orange and white remain limited to their measured accent treatments.
- Form placeholders reproduce the live black color at `0.6` opacity.
- Layout and element bounds were compared directly against the live page at 390, 500, 501, 768, 769, 1024, 1440, and 1920 px. Section, columns, copy blocks, card, controls, and text positions match, apart from normal subpixel font rasterization.
- The orange eyebrow and introductory paragraph were reverified at 390, 500, 501, 600, 768, 769, 1024, 1025, 1440, 1480, 1481, and 1920 px. Their rendered text bounds and line wrapping now match the live page exactly; the source curly apostrophe and eyebrow `95%` maximum width/non-shrinking flex behavior are preserved.
- Responsive transitions at 500/501 px, 768/769 px, 1024/1025 px, and 1480/1481 px follow the source page rules.
- All Part 2 component styling is implemented with Tailwind utilities; no component CSS file or DaisyUI dependency is used.
- Keyboard-focus treatment is present for the form controls and submit button. Part 15 now provides validation and explicit submission states; production delivery activates when `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is supplied.
- ESLint and the Next.js production static build pass.
- No approved visual deviations.

### Part 3 verification record

- Completed on 5 November 2026.
- The live trust-strip markup, computed styles, check SVG, wrapping rules, responsive container widths, inter-item spacing, and dividers were inspected directly.
- The source black surface, `#ff3d00` check icons, white Archivo `13px/700` text, tracking, line heights, 20 px vertical padding, and light dividers are reproduced with Tailwind utilities.
- The four source labels and their order are preserved exactly.
- Element bounds and relevant computed styles were compared directly with the live page at 390, 500, 501, 600, 768, 769, 1024, 1025, 1440, 1480, 1481, and 1920 px, with zero geometry or relevant-style mismatches above the 0.11 px comparison tolerance.
- The source's responsive wrapping is preserved, including narrow-mobile single-column rows, the two-column layout below 768 px where space allows, the 3+1 wrap at constrained tablet/desktop container widths, and the single-row layout at wider source breakpoints.
- All Part 3 styling is implemented with Tailwind utilities; no component CSS file or DaisyUI dependency is used.
- No approved visual deviations.

### Part 4 verification record

- Completed on 5 November 2026.
- The owner-supplied `references/image2.png` was inspected and used as the primary desktop visual reference for this part.
- The live section markup, computed styles, responsive container rules, eyebrow SVG and divider, split-color heading, introductory copy, six problem cells, cross SVG, shared borders, and grid row behavior were inspected directly.
- All six titles, descriptions, punctuation, curly apostrophes, emphasized phrases, and their order match the live source exactly.
- The warm `#f4f4f2` surface, Archivo and Inter typography, muted heading text, white problem cells, `#d4d4d4` borders, and orange `#ff3d00` emphasis are reproduced with Tailwind utilities.
- Element bounds and relevant computed styles were compared directly against the live page at 390, 500, 501, 600, 768, 769, 1024, 1025, 1440, 1480, 1481, and 1920 px, with zero mismatches above the 0.13 px subpixel comparison tolerance.
- The one-column mobile layout, two-column layout from 501 px, equal first grid rows, collapsed shared borders, responsive heading widths, and source line wrapping are preserved.
- All Part 4 styling is implemented with Tailwind utilities; no component CSS file or DaisyUI dependency is used.
- No approved visual deviations.

### Part 5 verification record

- Completed on 5 November 2026.
- The owner-supplied `references/image3.png` was inspected and used as the primary desktop visual reference; `references/image4.png` was inspected and reserved for the following website-review CTA and business-growth work.
- The implementation checklist was corrected to follow the live page order: website development services now immediately follow the website-problems section, while the before/after transformation remains later in the page.
- The live section markup, Elementor CSS, computed styles, responsive container rules, eyebrow SVG and divider, split-color heading, introductory copy, six service cells, number treatment, shared borders, and hover behavior were inspected directly.
- All six numbers, service titles, descriptions, punctuation, and their order match the live source exactly.
- The black surface, Archivo and Inter typography, white and muted-gray text, `#333333` cell borders, outlined numbers, translucent hover surface, and orange hover stroke are reproduced with Tailwind utilities.
- Element bounds and relevant computed styles were compared directly against the live page at 390, 500, 501, 600, 768, 769, 1024, 1025, 1440, 1480, 1481, and 1920 px, with zero mismatches above the 0.13 px subpixel comparison tolerance.
- The one-column mobile grid, two-column intermediate grid, three-column layout from 769 px, equal explicit rows, responsive heading and intro widths, source line wrapping, and exact breakpoint border behavior are preserved.
- All Part 5 styling is implemented with Tailwind utilities; no component CSS file or DaisyUI dependency is used.
- No approved visual deviations.

### Part 6 verification record

- Completed on 5 November 2026.
- The owner-supplied `references/image4.png` was inspected and used as the primary desktop visual reference for the website-review CTA.
- The live section markup, Elementor CSS, computed styles, responsive container widths, heading and intro widths, button treatment, trust-list wrapping, icon geometry, and interactive states were inspected directly.
- The heading, supporting sentence, button label, and all three trust statements match the live source exactly.
- The source `#ff3d00` surface, white Archivo heading, white Inter supporting copy, white square button, and compact trust typography are reproduced with Tailwind utilities.
- Element bounds, copy, and relevant computed styles were compared directly against the live page at 390, 500, 501, 600, 768, 769, 1024, 1025, 1440, 1480, 1481, and 1920 px, with zero mismatches above the 0.13 px subpixel comparison tolerance.
- The narrow-mobile three-row trust layout, 501 px two-row transition, wider single-row treatment, exact responsive content widths, and source button hover/focus colors are preserved.
- The CTA opens the accessible consultation modal and retains the hero-form anchor as its no-JavaScript fallback.
- All Part 6 styling is implemented with Tailwind utilities; no component CSS file or DaisyUI dependency is used.
- ESLint and the Next.js production static build pass.
- No approved visual deviations.

### Part 7 verification record

- Completed on 5 November 2026.
- The owner-supplied `references/Image5.png` was inspected and used as the primary desktop visual reference for the business-growth benefits section.
- The live section markup, Elementor CSS, computed styles, responsive container rules, eyebrow treatment, split-color heading, grid behavior, six card layouts, exact SVG paths, shared borders, and pointer state were inspected directly.
- The heading, all six benefit titles, descriptions, punctuation, and their order match the live source exactly.
- The white surface, Archivo and Inter typography, black icon tiles, white icons, `#e6e6e6` borders, muted heading text, and card spacing are reproduced with Tailwind utilities.
- Element bounds, content, and relevant computed styles were compared directly against the live page at 390, 400, 401, 500, 501, 502, 600, 768, 769, 1024, 1025, 1440, 1480, 1481, and 1920 px, with zero mismatches above the 0.13 px subpixel comparison tolerance.
- The one-column mobile grid, two-column layout from 501 px, three-column layout from 769 px, explicit equal grid rows, responsive heading widths, natural source line wrapping, and exact shared-border transitions are preserved.
- The source card pointer state was verified and remains visually unchanged, matching the live computed background color.
- All Part 7 styling is implemented with Tailwind utilities; no component CSS file or DaisyUI dependency is used.
- ESLint and the Next.js production static build pass.
- No approved visual deviations.

### Parts 8-14 verification record

- Completed on 5 November 2026 using the owner-supplied full-page reference and direct live-page inspection.
- The four-step process, before/after transformation, four animated statistics, six verified client reviews, six verified FAQ entries, final consultation CTA, full footer, tablet/mobile action bar, and floating WhatsApp control are implemented.
- Section, container, heading, panel, card, accordion, form, and footer bounds were measured against the live page at 390, 501, 769, 1025, 1481, and 1920 px. The implemented responsive transitions and measured geometry match within normal subpixel font/layout tolerance.
- The source one-column, two-column, and four-column transitions are preserved, including the source's wrapped-row heights and tablet footer behavior.
- Testimonials use the six exact live quotes and company names. The carousel is stable, manually controlled, swipe-capable, keyboard operable, and does not auto-rotate.
- The FAQ uses accessible buttons and regions, permits only one open answer, and starts with the first answer open as in the source.
- Counters expose final server-rendered values, animate once when visible, and skip animation for reduced-motion users.
- The final CTA, footer contact details, phone links, email link, white logo, and existing source navigation copy are present.
- All styling remains in Tailwind utilities; DaisyUI and component CSS were not added.

### Part 15 local implementation record

- The header, website-review CTA, and mobile action bar open one native accessible consultation dialog.
- Native dialog focus containment, Escape closing, close-button behavior, backdrop closing, body-scroll locking, and focus restoration are available without an additional modal package.
- Hero, final CTA, and modal forms share one typed form component with browser validation, disabled/loading state, success, delivery-error, and unconfigured-endpoint states.
- Form submissions include source, page URL, UTM values, and a honeypot field. Analytics hooks push modal and form events to an existing `dataLayer` when one is present.
- The production endpoint is intentionally not invented. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` from `frontend/.env.example`, rebuild, and complete a real delivery test before changing Part 15 to complete.

### Part 16 local verification record

- ESLint, TypeScript, and the Next.js production static export pass.
- The production export was served through the nested target path and tested with client-side JavaScript enabled.
- Modal, FAQ, carousel, form fallback, image loading, unique IDs, metadata, canonical URL, and Service/FAQ JSON-LD passed the clean-browser smoke test with no console errors.
- Full responsive geometry was compared at the measured source breakpoints. Production RunCloud routing, analytics-provider confirmation, real form delivery, indexing approval, and rollback verification remain deployment tasks.

