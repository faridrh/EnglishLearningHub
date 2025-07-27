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
├── videos/
├── az/ (Azerbaijani translation)
│   ├── _includes/
│   ├── qrammatika/
│   ├── hekayeler/
│   ├── luget/
│   └── videolar/
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

### Videos (Videolar)
- **Conversation**: Real-life dialogue practice
- **Grammar**: Visual grammar explanations
- **Pronunciation**: Phonetics and accent training

## Recent Changes

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