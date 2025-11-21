/**
 * HERE AND NOW AI - Profile Website JavaScript
 * Pure Vanilla JavaScript (ES6+) with no dependencies
 */

// ==============================================
// Profile Data
// ==============================================

const profileData = {
    ruthran: {
        name: 'Ruthran Raghavan',
        title: 'CEO & Chief AI Scientist',
        image: './assets/images/Ruthran Raghavan, CEO & Chief AI Scientist.jpeg',
        shortBio: 'Visionary leader driving AI innovation and research at HERE AND NOW AI.',
        fullBio: `Ruthran Raghavan serves as the CEO and Chief AI Scientist at HERE AND NOW AI, leading the institute's mission to democratize artificial intelligence through education, enterprise solutions, and advanced research.

With deep expertise in artificial intelligence and machine learning, Ruthran guides the strategic direction of the institute while spearheading cutting-edge research initiatives including the development of autonomous AI systems and the flagship Robot Professor project.

Under his leadership, HERE AND NOW AI has become a pioneering force in making AI accessible to businesses and educational institutions across India and beyond.`,
        responsibilities: [
            'Strategic leadership and vision',
            'AI research and development',
            'Innovation in autonomous systems',
            'Enterprise AI strategy',
            'Team leadership and mentorship'
        ],
        achievements: [
            'Founded HERE AND NOW AI in 2018',
            'Leading development of Robot Professor',
            'Advancing agentic AI innovation',
            'Pioneering AI education programs'
        ],
        contact: {
            email: 'ruthran@hereandnowai.com',
            linkedin: '#',
            website: 'https://hereandnowai.com'
        },
        pdfProfile: './assets/profiles/Profile-corporate-Ruthran-RAGHAVAN-HERE-AND-NOW-ai-v3.2.pdf'
    },
    deepti: {
        name: 'Deepti Balagopal',
        title: 'Chief Operating Officer',
        image: './assets/images/Deepti Balagopal, COO.jpeg',
        shortBio: 'Language educator and innovator driving operational excellence at HERE AND NOW AI.',
        fullBio: `Deepti Balagopal serves as the Chief Operating Officer at HERE AND NOW AI, bringing her unique background as a language educator and innovator to operational leadership.

As COO, Deepti oversees the day-to-day operations of the institute, ensuring seamless delivery of AI education programs, enterprise solutions, and research initiatives. Her expertise in education and communication enables her to bridge the gap between complex AI concepts and practical applications.

Deepti's leadership focuses on creating accessible, inclusive AI education programs that empower individuals and organizations to harness the power of artificial intelligence effectively.`,
        responsibilities: [
            'Operational leadership and management',
            'AI education program development',
            'Quality assurance and delivery',
            'Stakeholder engagement',
            'Process optimization'
        ],
        achievements: [
            'Built scalable AI education programs',
            'Established operational excellence frameworks',
            'Pioneered inclusive AI curriculum design',
            'Expanded enterprise partnerships'
        ],
        contact: {
            email: 'deepti@hereandnowai.com',
            linkedin: '#',
            website: 'https://hereandnowai.com'
        },
        pdfProfile: './assets/profiles/Profile-of-Language-Educator-Innovator-Director-Deepti-BALAGOPAL-V1.3.pdf'
    },
    balaji: {
        name: 'Balaji Kamalakkannan',
        title: 'Chief Technology Officer',
        image: './assets/images/Balaji Kamalakkannan, CTO.jpeg',
        shortBio: 'Technology leader architecting innovative AI solutions and infrastructure.',
        fullBio: `Balaji Kamalakkannan serves as the Chief Technology Officer at HERE AND NOW AI, leading the technical architecture and implementation of the institute's AI solutions and research platforms.

As CTO, Balaji oversees the development of enterprise-grade AI applications including CRMs, ERPs, and intelligent chatbots. He leads the technical team in building scalable, secure, and innovative AI systems that serve both educational and commercial purposes.

Balaji's expertise in agentic innovation and protocols like Model Context Protocol (MCP) and Agent-to-Agent (A2A) drives HERE AND NOW AI's cutting-edge technical capabilities and ensures the institute remains at the forefront of AI technology.`,
        responsibilities: [
            'Technology strategy and architecture',
            'AI system development and deployment',
            'Technical team leadership',
            'Infrastructure and security',
            'Innovation in agentic protocols'
        ],
        achievements: [
            'Architected enterprise AI solutions',
            'Implemented MCP and A2A protocols',
            'Built scalable AI infrastructure',
            'Led development of autonomous systems'
        ],
        contact: {
            email: 'balaji@hereandnowai.com',
            linkedin: '#',
            website: 'https://hereandnowai.com'
        },
        pdfProfile: './assets/profiles/profile-of-balaji-kamalakkannan-cto-here-and-now-ai.pdf'
    }
};

// ==============================================
// DOM Elements
// ==============================================

const modal = document.getElementById('profileModal');
const modalBody = document.getElementById('modalBody');
const modalCloseBtn = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
const searchInput = document.getElementById('searchInput');
const teamMembers = document.querySelectorAll('.team-member');
const bubbleButtons = document.querySelectorAll('.bubble-button');

// ==============================================
// Modal Management
// ==============================================

/**
 * Opens the profile modal with the specified profile data
 * @param {string} profileId - The ID of the profile to display
 */
function openModal(profileId) {
    const profile = profileData[profileId];
    
    if (!profile) {
        console.error(`Profile not found: ${profileId}`);
        return;
    }
    
    // Generate modal content
    const modalContent = generateProfileHTML(profile);
    modalBody.innerHTML = modalContent;
    
    // Show modal
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden'; // Prevent body scroll
    
    // Set focus to close button for accessibility
    setTimeout(() => {
        modalCloseBtn.focus();
    }, 100);
    
    // Set up focus trap
    setupFocusTrap();
}

/**
 * Closes the profile modal
 */
function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = ''; // Restore body scroll
    
    // Return focus to the button that opened the modal
    const lastFocusedButton = document.activeElement.closest('.bubble-button');
    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
}

/**
 * Generates HTML for profile display in modal
 * @param {Object} profile - Profile data object
 * @returns {string} HTML string
 */
function generateProfileHTML(profile) {
    return `
        <div class="profile-header">
            <div class="profile-image">
                <img src="${profile.image}" alt="${profile.name}">
            </div>
            <h2 class="profile-name" id="modalTitle">${profile.name}</h2>
            <p class="profile-title">${profile.title}</p>
        </div>
        
        <div class="profile-section">
            <h3>About</h3>
            <p>${profile.fullBio}</p>
        </div>
        
        <div class="profile-section">
            <h3>Key Responsibilities</h3>
            <ul>
                ${profile.responsibilities.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="profile-section">
            <h3>Notable Achievements</h3>
            <ul>
                ${profile.achievements.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="profile-section">
            <h3>Contact & Resources</h3>
            <div class="profile-actions">
                <a href="mailto:${profile.contact.email}" class="profile-button" aria-label="Send email to ${profile.name}">
                    📧 Email
                </a>
                <a href="${profile.pdfProfile}" download class="profile-button" aria-label="Download ${profile.name}'s full profile PDF">
                    📄 Download Profile
                </a>
                <a href="${profile.contact.website}" target="_blank" rel="noopener noreferrer" class="profile-button" aria-label="Visit HERE AND NOW AI website">
                    🌐 Website
                </a>
            </div>
        </div>
    `;
}

/**
 * Sets up focus trap within modal for accessibility
 */
function setupFocusTrap() {
    const focusableElements = modal.querySelectorAll(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    // Handle Tab key to trap focus
    modal.addEventListener('keydown', function trapFocus(e) {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    });
}

// ==============================================
// Event Listeners
// ==============================================

/**
 * Initialize all event listeners
 */
function initEventListeners() {
    // Profile bubble click handlers
    bubbleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const profileId = button.dataset.profile;
            openModal(profileId);
        });
        
        // Keyboard accessibility (Enter and Space)
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const profileId = button.dataset.profile;
                openModal(profileId);
            }
        });
    });
    
    // Close button
    modalCloseBtn.addEventListener('click', closeModal);
    
    // Close on overlay click
    modalOverlay.addEventListener('click', closeModal);
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
            closeModal();
        }
    });
    
    // Search/Filter functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==============================================
// Search/Filter Functionality
// ==============================================

/**
 * Handles search input and filters team members
 * @param {Event} e - Input event
 */
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    teamMembers.forEach(member => {
        const name = member.querySelector('.member-name').textContent.toLowerCase();
        const role = member.querySelector('.member-role').textContent.toLowerCase();
        
        const matches = name.includes(searchTerm) || role.includes(searchTerm);
        
        if (matches || searchTerm === '') {
            member.classList.remove('hidden');
            member.style.display = '';
        } else {
            member.classList.add('hidden');
            member.style.display = 'none';
        }
    });
}

// ==============================================
// Lazy Loading Images
// ==============================================

/**
 * Sets up intersection observer for lazy loading images
 */
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger load if not already loaded
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ==============================================
// Accessibility Enhancements
// ==============================================

/**
 * Announces content changes to screen readers
 * @param {string} message - Message to announce
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ==============================================
// Initialize Application
// ==============================================

/**
 * Main initialization function
 */
function init() {
    console.log('HERE AND NOW AI - Profile Website Initialized');
    
    // Set up all event listeners
    initEventListeners();
    
    // Set up lazy loading
    setupLazyLoading();
    
    // Add screen reader only class for announcements
    const style = document.createElement('style');
    style.textContent = `
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }
    `;
    document.head.appendChild(style);
    
    console.log('✓ Event listeners initialized');
    console.log('✓ Lazy loading configured');
    console.log('✓ Accessibility features enabled');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for potential testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        openModal,
        closeModal,
        profileData
    };
}
