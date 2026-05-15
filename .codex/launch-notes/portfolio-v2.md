# Portfolio Version 2 Reveal Note

## Current Version 1 Setup

The portfolio feature is intentionally hidden from public navigation for the first live launch.

The portfolio routes, components, project MDX files, and image assets remain in the codebase:

- `/portfolio`
- `/portfolio/[slug]`
- `content/projects`
- `components/content/PortfolioLibrary.tsx`
- `components/content/PortfolioCard.tsx`
- `components/sections/FeaturedCarousel.tsx`

For Version 1, visible proof-of-work is routed through the Analysis page instead. This keeps the public site focused on strong thought leadership, services, About, and Calendly contact paths while the project case study library is still being developed.

## Version 2 Reveal Checklist

When there are at least 2-3 polished portfolio case studies:

1. Add `Portfolio` back to `components/layout/Navbar.tsx`.
2. Restore a home page portfolio section or carousel in `app/page.tsx`.
3. Change the home hero CTA from `Explore Analysis` back to a portfolio-facing CTA if appropriate.
4. Change the Services page secondary CTA from `Read Analysis` back to `View Portfolio` if the case studies support service credibility.
5. Review all project MDX frontmatter and thumbnails before publishing the portfolio link.

