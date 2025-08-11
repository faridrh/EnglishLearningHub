# English Language Learning Platform

## Overview
A comprehensive multilingual blog for English learners built with Eleventy, featuring dedicated sections for vocabulary learning, grammar topics, and educational stories organized by difficulty levels (beginner, intermediate, advanced). The platform supports both English and Azerbaijani language versions. The business vision is to provide a rich, structured, and accessible resource for individuals seeking to improve their English language skills globally, with a focus on Azerbaijani speakers. This platform aims to be a leading online destination for self-paced English education, leveraging static site generation for performance and scalability.

## User Preferences
- Use Eleventy as the primary static site generator
- Maintain multilingual functionality with English and Azerbaijani
- Keep Google Analytics tracking on all pages
- Organize content by difficulty levels (beginner, intermediate, advanced)
- Use responsive design principles
- Maintain comprehensive educational content structure

## System Architecture
The platform is built using Eleventy (11ty) as a static site generator with Nunjucks for templating, ensuring fast load times and a secure architecture. Styling is handled with responsive CSS. The site structure separates content by language (English at root, Azerbaijani at `/az/`) and by educational category (grammar, stories, vocabulary), further segmented by difficulty levels.

**Key Architectural Decisions & Features:**
- **Multilingual Support**: Full content translation for English and Azerbaijani with a language switcher. Content is localized, with specific content sections (e.g., stories, grammar, vocabulary) maintaining English content even when the interface is in Azerbaijani, as per learning design.
- **Content Organization**: Grammar, Stories, and Vocabulary sections are meticulously organized into Beginner, Intermediate, and Advanced levels.
- **Interactive Elements**:
    - **Grammar Page Toggles**: Collapsible H3 sections in grammar pages improve readability and user focus.
    - **Interactive Exercises**: A modular, reusable exercise system with unique container IDs for real-time feedback, scoring, and corrections across all grammar levels.
- **SEO Optimization**: Comprehensive meta tags (Open Graph, Hreflang), JSON-LD schema, canonical URLs, `sitemap.xml`, and `robots.txt` are implemented for improved search engine visibility. Internal linking fosters topic clusters and enhances content discoverability.
- **UI/UX Design**: Emphasis on clean, consistent layouts across all pages and languages. Search sections have been removed from main content pages to simplify the interface, with search functionality accessible via the header navigation. Footer content is streamlined, focusing on core learning sections.

## Recent Major Developments

### Little Red Riding Hood Story Addition & Azerbaijani Stories Page Fix (Latest Update - January 2025)
- **New Intermediate Story**: Added "Little Red Riding Hood" classic fairy tale to intermediate stories collection
- **Text Highlighting System**: Applied vocabulary highlighting with Azerbaijani translation tooltips throughout the story
- **SEO-Optimized Content**: Included comprehensive alt text for story image and structured metadata
- **Educational Integration**: Connected story with relevant grammar topics, vocabulary pages, and similar stories through "Related Learning Materials" section
- **Cultural Context**: Added cultural notes explaining the story's significance and moral lessons
- **Interactive Elements**: Included comprehension questions, discussion points, and vocabulary practice sections
- **Professional Layout**: Consistent with existing intermediate story format including reading time, word count, and structured navigation
- **Azerbaijani Stories Page Enhancement**: Fixed missing story cards section in `/az/hekayeler/` to match English version `/stories/`
- **Bilingual Story Cards**: Added complete "Featured Stories" section with Azerbaijani translations including the new Little Red Riding Hood story
- **Reading Tips Section**: Added comprehensive reading tips section in Azerbaijani for improved user experience
- **Complete Azerbaijani Vocabulary Layout Fix**: Corrected layout inconsistencies across all vocabulary levels (`/az/luget/baslangic/`, `/az/luget/orta/`, `/az/luget/ireli/`) to match English versions exactly
- **Full Vocabulary Content Synchronization**: Updated word lists in all Azerbaijani vocabulary pages (beginner, intermediate, advanced) to match English versions exactly
- **Comprehensive Cross-Reference Integration**: Added "Connect Your Learning" sections with grammar and story links in Azerbaijani across all vocabulary levels
- **Template Unification**: Changed all Azerbaijani vocabulary pages from `layouts/base-az.njk` to `layouts/page.njk` for consistent structure
- **Comprehensive Sitemap Update**: Updated sitemap.xml to include all recent additions: Little Red Riding Hood story, all exercise pages (18 total), all vocabulary sub-pages (36 total), complete Azerbaijani section structure, and proper SEO organization for www.ingilisdili.com
- **Interactive English Level Placement Test**: Created comprehensive 25-question placement test with sections for Grammar, Vocabulary, Reading Comprehension, and Sentence Structure, featuring real-time scoring, progress tracking, level assessment (A1-C2), and personalized learning recommendations

### Complete Related Materials Integration (Previous Update)
- **Comprehensive Linking System**: Added "Related Learning Materials" sections to ALL intermediate and advanced grammar topics
- **Exercise Page Integration**: Each grammar topic now includes direct links to its dedicated exercise page (e.g., `/grammar/intermediate/past-perfect-exercises/`)
- **Cross-Content Connections**: Vocabulary pages, stories, and related grammar topics are interconnected for comprehensive learning paths
- **Educational Architecture**: Enhanced topic clusters connecting grammar lessons with relevant vocabulary and story content across all proficiency levels
- **SEO Enhancement**: Improved internal linking structure enhances content discoverability and learning progression

### Enhanced Bilingual Vocabulary System (Previous Update)
- **Azerbaijani Translation Integration**: Added comprehensive Azerbaijani translations to vocabulary cards across all levels (beginner, intermediate, advanced)
- **Visual Design Enhancement**: Implemented light yellow background highlighting for Azerbaijani translations with optimal readability (black text on #fffbf0 background)
- **Bilingual Examples**: Both English and Azerbaijani example sentences provided for contextual learning
- **Template System**: Enhanced vocabulary template with conditional rendering for `azerbaijani` and `exampleAz` fields
- **Consistent Styling**: Clean, professional appearance with rounded corners and proper spacing for translation highlights
- **User Preference Integration**: Styling customized based on user feedback for optimal visual comfort

### Complete Exercise Page System (Previous Update)
- **Comprehensive Coverage**: Created dedicated exercise pages for ALL 18 grammar topics across all levels
- **Beginner Exercise Pages** (6 topics): articles-exercises, plural-nouns-exercises, possessive-adjectives-exercises, present-simple-exercises, present-continuous-exercises, subject-pronouns-exercises
- **Intermediate Exercise Pages** (6 topics): conditionals-1-2-exercises, modal-verbs-exercises, passive-voice-exercises, past-perfect-exercises, relative-clauses-exercises, reported-speech-exercises
- **Advanced Exercise Pages** (6 topics): subjunctive-exercises, inversion-exercises, cleft-sentences-exercises, conditionals-3-mixed-exercises, ellipsis-substitution-exercises, participle-clauses-exercises

### Educational Architecture Design
- **Theory-Practice Separation**: Main grammar pages focus on rules and explanations, exercise pages provide focused practice
- **Dedicated URLs**: Each exercise page has its own URL following the pattern `/grammar/[level]/[topic]-exercises/`
- **Interactive Functionality**: All exercises include real-time feedback, automatic scoring, and reset functionality
- **Progressive Difficulty**: Exercises are appropriately calibrated for their respective skill levels
- **Cross-linking**: Exercise pages link back to grammar lessons and related learning materials

### SEO Content Optimization (Previous Update)
- **Topic Clusters**: Created interconnected learning paths between vocabulary, grammar, and stories
- **Internal Linking**: Added "Related Learning Materials" sections to connect related content across all levels
- **SEO-Optimized Images**: Enhanced alt text with detailed, keyword-rich descriptions for story images
- **Content Integration**: Connected vocabulary pages with relevant grammar topics and stories
- **Learning Pathways**: Established clear navigation between beginner, intermediate, and advanced materials

## External Dependencies
- **Google Analytics**: Integrated for site analytics and tracking (ID: G-5FLZJH1PD0).