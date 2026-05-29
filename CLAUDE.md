# Portfolio Project Guide

## Project Overview
Personal portfolio website built with React showcasing projects, skills, and professional experience. The site is deployed on GitHub Pages and serves as a digital resume and project showcase.

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── About/          # About section with bio, skills, and tools
│   │   ├── Projects/       # Project showcase
│   │   ├── Resume/         # Resume display component
│   │   ├── Home/           # Home/landing section
│   │   ├── Navbar.js       # Navigation
│   │   ├── Footer.js       # Footer
│   │   └── Particle.js     # Background particle effect
│   ├── Assets/             # Images, PDFs, media
│   ├── style.css           # Global styles
│   └── App.js              # Main app component
├── public/                 # Static files
├── package.json            # Dependencies
└── CLAUDE.md              # This file
```

## Key Files to Modify

- **AboutCard.js** - Bio section with intro and quote
- **Techstack.js** - Technology icons and skills display
- **Toolstack.js** - Development tools display
- **ResumeNew.js** - Resume PDF viewer and social links
- **Projects/** - Project showcase components

## Current Stack
- React with React Bootstrap
- react-pdf for resume display
- React Icons for icon libraries
- CSS for styling
- GitHub Pages for deployment

## Important Notes

1. **Resume PDF** - Currently using `Sushrut_Resume_Latest.pdf` from Assets folder
2. **Social Links** - Resume component includes links to:
   - LeetCode
   - GeeksforGeeks
   - Coding Ninjas
   - CodeChef
   - LinkedIn should be added
3. **Responsive Design** - Uses Bootstrap grid system for mobile-friendly layout
4. **Deployment** - Configure React app for GitHub Pages (see package.json homepage)

## Common Tasks

### Update Bio
Edit `src/components/About/AboutCard.js` - modify the Card.Body content

### Update Skills
- **Techstack.js** - Add/remove tech icons
- **Toolstack.js** - Add/remove tool icons

### Add Projects
Edit Project components in `src/components/Projects/`

### Update Resume
1. Replace PDF in `src/Assets/`
2. Update reference in `src/components/Resume/ResumeNew.js`

## To Run Locally
```bash
npm install
npm start
```

## To Deploy
```bash
npm run build
npm run deploy
```
