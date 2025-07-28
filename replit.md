# English Language Learning Platform

## Project Overview
A comprehensive multilingual blog for English learners built with Eleventy, featuring dedicated sections for vocabulary learning, grammar topics, and educational stories organized by difficulty levels (beginner, intermediate, advanced), with both English and Azerbaijani language versions.

## Project Architecture

### Technology Stack
- **Static Site Generator**: Eleventy (11ty)
- **Template Engine**: Nunjucks
- **Styling**: CSS with responsive design
- **Analytics**: Google Analytics integration (G-5FLZJH1PD0)
- **Languages**: English and Azerbaijani

### Site Structure
```
src/
├── _includes/
│   ├── layouts/
│   │   ├── base.njk
│   │   ├── page.njk
│   │   ├── video.njk
│   │   └── vocabulary.njk
│   └── components/
│       ├── footer.njk
│       ├── navigation.njk
│       └── search.njk
├── grammar/
│   ├── beginner/
│   ├── intermediate/
│   └── advanced/
├── stories/
│   ├── beginner/
│   ├── intermediate/
│   └── advanced/
├── vocabulary/
├── az/ (Azerbaijani translation)
│   ├── _includes/
│   ├── qrammatika/
│   ├── hekayeler/
│   └── luget/
└── css/
    └── style.css
```

### Multilingual Support
- **English**: Main site at root level
- **Azerbaijani**: Complete translation at `/az/` path
- Language switcher in header
- Localized navigation and content

## Content Sections

### Grammar (Qrammatika)
- **Beginner**: 6 topics (Articles, Plural Nouns, Present Simple/Continuous, etc.)
- **Intermediate**: 6 topics (Conditionals, Modal Verbs, Passive Voice, etc.)
- **Advanced**: 6 topics (Cleft Sentences, Subjunctive, Participle Clauses, etc.)

### Stories (Hekayeler)
- **Beginner**: 3 stories (A Day at School, Daily Routine, Shopping)
- **Intermediate**: 4 stories (Market Day, Job Interview, Lost Key, Unexpected Friend)
- **Advanced**: 3 stories (Climate Change, Digital Nomads, AI Ethics)

### Vocabulary (Lüğət)
- **Beginner**: 500+ essential words
- **Intermediate**: 800+ intermediate words
- **Advanced**: 1200+ advanced and academic words



## Recent Changes

### January 2025
- **SEO Optimization**: Complete sitemap.xml and robots.txt implementation
  - Comprehensive sitemap covering all 60+ pages including grammar, stories, vocabulary sections
  - Both English and Azerbaijani versions properly indexed
  - Robots.txt with proper search engine guidance
  - SEO meta tags added to base layout for better search engine visibility
  - Sitemap accessible at /sitemap.xml for search engine discovery
- **Complete Interactive Exercise System**: Implemented comprehensive modular exercises across ALL grammar levels
  - **Beginner**: All 6 topics now have interactive exercises (articles, plural-nouns, possessive-adjectives, present-simple, present-continuous, subject-pronouns)
  - **Intermediate**: All 6 topics now have interactive exercises (conditionals-1-2, modal-verbs, passive-voice, past-perfect, relative-clauses, reported-speech)
  - **Advanced**: All 6 topics now have interactive exercises (subjunctive, inversion, cleft-sentences, conditionals-3-mixed, ellipsis-substitution, participle-clauses)
  - Each exercise has unique IDs for complete modularity and reusability
  - Real-time feedback system with scoring and detailed corrections
  - Consistent styling and user experience across all levels
  
- **Modular Exercise Architecture**: Revolutionary reusable exercise system
  - Unique container IDs prevent conflicts when multiple exercises appear on same page
  - JavaScript functions accept exerciseId parameter for complete modularity
  - Exercises can be embedded anywhere with different content using same framework
  - Centralized /exercises/ page demonstrates system capabilities with 5 different exercise types
  - Added to main navigation menu for easy access

### December 2024
- **Multilingual Implementation**: Complete Azerbaijani translation added
  - All main pages translated (Home, About, Contact)
  - Complete navigation and footer translation
  - All content sections translated with localized URLs
  
- **Content Structure Completion**: 
  - Fixed all broken navigation links in stories section
  - Created complete story collections (10 total stories)
  - Resolved grammar section broken links
  - Added comprehensive vocabulary content for all levels
  
- **Language Switcher**: Added visible language switching functionality
  - Language switcher positioned in header next to navigation
  - Users can switch between English and Azerbaijani versions
  - Proper CSS styling with hover effects and active states
  
- **Story Links Fix**: Updated Azerbaijani story section
  - All story links now point to original English stories
  - Removed broken Azerbaijani story translations
  - Maintained Azerbaijani interface with English content for stories

- **Video Section Removal**: Completely removed Video Lessons section
  - Removed all video-related directories (src/videos, src/az/videolar)
  - Updated homepage to replace video content with grammar and stories
  - Removed video navigation links from both English and Azerbaijani versions
  - Cleaned up Eleventy configuration by removing video-related filters and collections

- **Azerbaijani Styling Fix**: Added missing CSS styles for Azerbaijani pages
  - Added styling for .hero-section, .features-section, .levels-section classes
  - Added support for .hero-content, .hero-description, .hero-buttons
  - Added button variants (.button.primary, .button.secondary, .button.large)
  - Added .level-features styling with checkmark icons
  - Ensured visual parity between English and Azerbaijani versions

- **Vocabulary Highlighting Feature**: Added vocabulary word highlighting across all stories
  - Implemented <mark> tags to highlight key vocabulary words within story text
  - Connected vocabulary words from each story to their respective vocabulary lists
  - Enhanced learning experience by visually identifying important words
  - Applied to all 10 stories across beginner, intermediate, and advanced levels

- **Grammar Links Fix**: Fixed all broken grammar links in Azerbaijani version
  - Updated all Azerbaijani grammar page links to point to English grammar content
  - Maintained Azerbaijani interface with English grammar lessons
  - Fixed beginner, intermediate, and advanced level navigation links
  - Resolved 404 errors on grammar section pages
  
- **Analytics Integration**: Google Analytics (G-5FLZJH1PD0) integrated across all pages

## User Preferences
- Use Eleventy as the primary static site generator
- Maintain multilingual functionality with English and Azerbaijani
- Keep Google Analytics tracking on all pages
- Organize content by difficulty levels (beginner, intermediate, advanced)
- Use responsive design principles
- Maintain comprehensive educational content structure

## Development Guidelines
- Use semantic HTML structure
- Implement responsive CSS design
- Maintain consistent navigation across languages
- Keep content organized by skill level
- Use Nunjucks templating for maintainability
- Implement proper SEO meta tags
- Ensure accessibility standards compliance

## Future Enhancements
- Interactive vocabulary cards
- Audio pronunciation guides
- Progress tracking system
- User authentication for personalized learning
- Community features and discussion forums
- Mobile app development consideration