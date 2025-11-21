# HERE AND NOW AI - Leadership Team Profile Website

A responsive, accessible, single-page profile website showcasing the founding members of HERE AND NOW AI. Built with pure vanilla HTML, CSS, and JavaScript — no frameworks or libraries.

## 🌟 Features

- **Modern, Minimalistic Design** - Dark theme with vibrant cyan accents and smooth animations
- **Responsive Layout** - Mobile-first design that works beautifully on all devices
- **Interactive Profile Bubbles** - Circular team member buttons with hover effects and tooltips
- **Accessible Modal System** - Side-sliding panel with full keyboard navigation and focus trap
- **Search & Filter** - Real-time search to find team members by name or role
- **SEO Optimized** - Comprehensive meta tags and semantic HTML structure
- **Performance Focused** - Lazy loading images, minimal DOM, optimized assets
- **WCAG AA Compliant** - Full accessibility support including screen reader announcements

## 📁 Directory Structure

```
/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styling (no preprocessors)
├── js/
│   └── app.js              # Vanilla JavaScript (no libraries)
├── assets/
│   ├── images/             # Team photos, logo, icons
│   │   ├── Ruthran Raghavan, CEO & Chief AI Scientist.jpeg
│   │   ├── Deepti Balagopal, COO.jpeg
│   │   ├── Balaji Kamalakkannan, CTO.jpeg
│   │   ├── logo-here-and-now-ai.png
│   │   ├── qr-code-www.hereandnowai.com.png
│   │   └── qr-code-google-review-hereandnowai.png
│   └── profiles/           # PDF profile documents
│       ├── Profile-corporate-Ruthran-RAGHAVAN-HERE-AND-NOW-ai-v3.2.pdf
│       ├── Profile-of-Language-Educator-Innovator-Director-Deepti-BALAGOPAL-V1.3.pdf
│       └── profile-of-balaji-kamalakkannan-cto-here-and-now-ai.pdf
├── README.md               # This file
└── SOURCES.md              # Data sources and attributions
```

## 🚀 Getting Started

### Local Development

1. **Clone or download** this repository
2. **Open `index.html`** in any modern web browser
   ```bash
   # Using Python's built-in server (optional)
   python3 -m http.server 8000
   
   # Or using Node.js http-server (optional)
   npx http-server .
   ```
3. Navigate to `http://localhost:8000` (if using a server) or simply double-click `index.html`

### Browser Requirements

This website uses modern web standards (ES6+ JavaScript, CSS Grid, CSS Custom Properties). It works best in:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 👥 Team Members

### Ruthran Raghavan
**CEO & Chief AI Scientist**
- Founded HERE AND NOW AI in 2018
- Leading development of autonomous AI systems including Robot Professor
- Strategic vision and research leadership

### Deepti Balagopal
**Chief Operating Officer**
- Language educator and innovation leader
- Operational excellence and program development
- Inclusive AI education initiatives

### Balaji Kamalakkannan
**Chief Technology Officer**
- Technical architecture and implementation
- Enterprise AI solutions (CRMs, ERPs, chatbots)
- Agentic innovation with MCP and A2A protocols

## 🎨 Design System

### Color Palette
- **Background Primary**: `#0a0a0a` (Dark charcoal)
- **Background Secondary**: `#1a1a1a`
- **Accent**: `#00d4ff` (Vibrant cyan)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#b0b0b0`

### Responsive Breakpoints
- **Mobile**: < 768px (base styles)
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Bubble Sizes
- **Mobile**: 100px diameter
- **Tablet**: 110px diameter
- **Desktop**: 120px diameter

## ✏️ Adding New Team Members

1. **Add the team member's photo** to `assets/images/`
2. **Add HTML markup** in `index.html` within the `.team-grid`:
   ```html
   <article class="team-member" data-member="firstname">
       <button class="bubble-button" data-profile="firstname" 
               aria-label="View profile of First Last, Title">
           <div class="bubble-image">
               <img src="./assets/images/firstname-lastname.jpeg" 
                    alt="First Last" loading="lazy">
           </div>
       </button>
       <div class="member-info">
           <h3 class="member-name">First Last</h3>
           <p class="member-role">Job Title</p>
       </div>
   </article>
   ```
3. **Add profile data** in `js/app.js` within the `profileData` object:
   ```javascript
   firstname: {
       name: 'First Last',
       title: 'Job Title',
       image: './assets/images/firstname-lastname.jpeg',
       shortBio: 'One sentence bio...',
       fullBio: 'Full biography...',
       responsibilities: ['Item 1', 'Item 2'],
       achievements: ['Achievement 1', 'Achievement 2'],
       contact: {
           email: 'email@hereandnowai.com',
           linkedin: '#',
           website: 'https://hereandnowai.com'
       },
       pdfProfile: './assets/profiles/profile-name.pdf'
   }
   ```

## 🚢 Deployment

### GitHub Pages

1. Push code to a GitHub repository
2. Go to **Settings** → **Pages**
3. Select **main** branch and **/ (root)** folder
4. Click **Save**
5. Your site will be live at `https://[username].github.io/[repo-name]/`

### Netlify

1. Visit [Netlify](https://netlify.com) and sign up/login
2. Drag and drop the project folder
3. Site deployed instantly!

### Custom Server

Simply upload all files to your web server's public directory. No build process or server-side code required.

## ♿ Accessibility Features

- **Keyboard Navigation**: Full support for Tab, Enter, Space, and Escape keys
- **Focus Management**: Visible focus indicators and modal focus trap
- **ARIA Attributes**: Proper labels, roles, and live regions
- **Screen Reader Support**: Semantic HTML and announcements
- **Color Contrast**: WCAG AA compliant (4.5:1 minimum)
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Alt Text**: All images have descriptive alt attributes

## 🧪 Testing Checklist

### Visual Testing
- [ ] Hero section displays correctly with logo and mission
- [ ] Three team member bubbles are visible and properly styled
- [ ] Bubbles have hover effects (scale, glow)
- [ ] Modal opens when clicking a bubble
- [ ] Modal displays correct profile content
- [ ] Modal close button works
- [ ] Footer displays with QR codes

### Responsive Testing
- [ ] Mobile (375px, 480px): Bubbles stack properly, text readable
- [ ] Tablet (768px): Grid adjusts, bubbles resize
- [ ] Desktop (1024px+): Full layout with proper spacing

### Interaction Testing
- [ ] **Click**: Bubble opens modal
- [ ] **Keyboard**: Tab through bubbles, Enter/Space opens modal
- [ ] **Escape**: Closes modal
- [ ] **Outside click**: Modal overlay closes modal
- [ ] **Search**: Filters team members in real-time

### Accessibility Testing
- [ ] Tab navigation works throughout site
- [ ] Focus visible on all interactive elements
- [ ] Modal traps focus (Tab cycles within modal)
- [ ] Screen reader announces profile content
- [ ] All images have alt text
- [ ] Color contrast meets AA standards

### Performance Testing
- [ ] Page loads quickly (< 2 seconds)
- [ ] Images lazy load
- [ ] No render-blocking resources
- [ ] Total page weight < 1MB

## 📝 License & Attribution

© 2018-2025 HERE AND NOW AI. All rights reserved.

All profile content, images, and branding are property of HERE AND NOW AI.

See [SOURCES.md](./SOURCES.md) for detailed attribution of all data sources.

## 🔗 Links

- **Website**: [hereandnowai.com](https://hereandnowai.com)
- **Focus Areas**: AI Education, Enterprise Solutions, Advanced Research
- **Location**: Chennai, India
- **Founded**: 2018

---

**Built with ❤️ using pure Vanilla HTML, CSS, and JavaScript**
