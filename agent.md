# Portfolio Assistant Guide

## Purpose
This document guides Claude Code in maintaining and updating the portfolio website.

## When Working on Portfolio Updates

### Resume Integration Tasks
- Always sync resume content with AboutCard.js, Techstack, and Projects
- Keep social links in ResumeNew.js updated with resume contact info
- Ensure skills listed match both resume and Techstack/Toolstack components

### Code Quality Standards
- Keep components focused on single responsibility
- Use React Bootstrap for consistent styling
- Maintain responsive design (md breakpoint for desktop, xs for mobile)
- Import icons from react-icons libraries

### Asset Management
- Store PDFs and images in `src/Assets/`
- Keep resume PDF up-to-date as `Sushrut_Resume_Latest.pdf`
- Compress images before committing
- Link to correct asset paths in imports

### Content Updates
- Biography updates → AboutCard.js
- Skills updates → Techstack.js
- Tools updates → Toolstack.js
- New projects → src/components/Projects/
- Social links → ResumeNew.js

## Testing Before Deploy
1. Test responsive layout on mobile/tablet
2. Verify all social links work
3. Check PDF loads and displays correctly
4. Verify all project links are active
5. Test navigation between all sections

## Deployment Checklist
- [ ] Resume PDF updated
- [ ] Social links verified
- [ ] No broken image links
- [ ] Responsive design tested
- [ ] All external links work
- [ ] Build runs without errors: `npm run build`
- [ ] Deploy to GitHub Pages: `npm run deploy`
