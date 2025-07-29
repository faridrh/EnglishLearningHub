document.addEventListener('DOMContentLoaded', function() {
  // Navigation toggle for mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', 
        menu.classList.contains('active') ? 'true' : 'false'
      );
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Level indicator for vocabulary cards
  document.querySelectorAll('.vocabulary-card').forEach(card => {
    const level = card.querySelector('.level-badge')?.textContent.toLowerCase() || '';
    if (level) {
      card.style.borderTopColor = `var(--color-${level})`;
    }
  });
  
  // Initialize interactive elements on the page
  initInteractiveElements();
  
  // Initialize language switching
  initLanguageSwitching();
});

// Function to initialize interactive elements
function initInteractiveElements() {
  // Contact form validation (if present)
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      let isValid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      
      // Email validation
      const emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value.trim()) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          isValid = false;
          emailField.classList.add('error');
        }
      }
      
      if (isValid) {
        // Display success message (in a real application, you would submit the form)
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success';
        successMessage.innerHTML = 'Thank you for your message! We will respond shortly.';
        
        contactForm.parentNode.insertBefore(successMessage, contactForm);
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }
    });
  }
  
  // Add hover effects to cards
  document.querySelectorAll('.card, .feature-card, .vocabulary-card, .video-card, .tip-card')
    .forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = 'var(--box-shadow-lg)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });
}

// Dynamic language switching functionality
function initLanguageSwitching() {
  // URL mapping between English and Azerbaijani versions
  const urlMappings = {
    // Home pages
    '/': '/az/',
    '/az/': '/',
    
    // Vocabulary pages
    '/vocabulary/': '/az/luget/',
    '/vocabulary/beginner/': '/az/luget/baslangic/',
    '/vocabulary/intermediate/': '/az/luget/orta/',
    '/vocabulary/advanced/': '/az/luget/ireli/',
    '/az/luget/': '/vocabulary/',
    '/az/luget/baslangic/': '/vocabulary/beginner/',
    '/az/luget/orta/': '/vocabulary/intermediate/',
    '/az/luget/ireli/': '/vocabulary/advanced/',
    
    // Grammar pages
    '/grammar/': '/az/qrammatika/',
    '/grammar/beginner/': '/az/qrammatika/baslangic/',
    '/grammar/intermediate/': '/az/qrammatika/orta/',
    '/grammar/advanced/': '/az/qrammatika/ireli/',
    '/az/qrammatika/': '/grammar/',
    '/az/qrammatika/baslangic/': '/grammar/beginner/',
    '/az/qrammatika/orta/': '/grammar/intermediate/',
    '/az/qrammatika/ireli/': '/grammar/advanced/',
    
    // Stories pages
    '/stories/': '/az/hekayeler/',
    '/stories/beginner/': '/az/hekayeler/baslangic/',
    '/stories/intermediate/': '/az/hekayeler/orta/',
    '/stories/advanced/': '/az/hekayeler/ireli/',
    '/az/hekayeler/': '/stories/',
    '/az/hekayeler/baslangic/': '/stories/beginner/',
    '/az/hekayeler/orta/': '/stories/intermediate/',
    '/az/hekayeler/ireli/': '/stories/advanced/',
    
    // Exercises
    '/exercises/': '/az/calishmalar/',
    '/az/calishmalar/': '/exercises/',
    
    // Other pages
    '/about/': '/az/haqqinda/',
    '/contact/': '/az/elaqe/',
    '/az/haqqinda/': '/about/',
    '/az/elaqe/': '/contact/'
  };
  
  // Function to get the equivalent URL in the other language
  function getLanguageSwitchUrl(currentUrl) {
    // Remove trailing slash for comparison, then add it back for mapping
    const normalizedUrl = currentUrl.endsWith('/') ? currentUrl : currentUrl + '/';
    
    // Check direct mappings first
    if (urlMappings[normalizedUrl]) {
      return urlMappings[normalizedUrl];
    }
    
    // Handle vocabulary page numbers (e.g., /vocabulary/beginner/page-1/)
    const vocabPagePattern = /^(\/vocabulary\/(?:beginner|intermediate|advanced)\/)page-(\d+)\/?$/;
    const vocabPageMatch = normalizedUrl.match(vocabPagePattern);
    if (vocabPageMatch) {
      const [, path, pageNum] = vocabPageMatch;
      const azPath = urlMappings[path];
      if (azPath) {
        return `${azPath}page-${pageNum}/`;
      }
    }
    
    // Handle Azerbaijani vocabulary page numbers
    const azVocabPagePattern = /^(\/az\/luget\/(?:baslangic|orta|ireli)\/)page-(\d+)\/?$/;
    const azVocabPageMatch = normalizedUrl.match(azVocabPagePattern);
    if (azVocabPageMatch) {
      const [, path, pageNum] = azVocabPageMatch;
      const enPath = urlMappings[path];
      if (enPath) {
        return `${enPath}page-${pageNum}/`;
      }
    }
    
    // Handle individual grammar topics
    const grammarTopicPattern = /^(\/grammar\/(?:beginner|intermediate|advanced)\/)([^\/]+)\/?$/;
    const grammarTopicMatch = normalizedUrl.match(grammarTopicPattern);
    if (grammarTopicMatch) {
      const [, path, topic] = grammarTopicMatch;
      const azPath = urlMappings[path];
      if (azPath) {
        return `${azPath}${topic}/`;
      }
    }
    
    // Handle Azerbaijani grammar topics
    const azGrammarTopicPattern = /^(\/az\/qrammatika\/(?:baslangic|orta|ireli)\/)([^\/]+)\/?$/;
    const azGrammarTopicMatch = normalizedUrl.match(azGrammarTopicPattern);
    if (azGrammarTopicMatch) {
      const [, path, topic] = azGrammarTopicMatch;
      const enPath = urlMappings[path];
      if (enPath) {
        return `${enPath}${topic}/`;
      }
    }
    
    // Handle individual stories
    const storyPattern = /^(\/stories\/(?:beginner|intermediate|advanced)\/)([^\/]+)\/?$/;
    const storyMatch = normalizedUrl.match(storyPattern);
    if (storyMatch) {
      const [, path, story] = storyMatch;
      const azPath = urlMappings[path];
      if (azPath) {
        return `${azPath}${story}/`;
      }
    }
    
    // Handle Azerbaijani stories
    const azStoryPattern = /^(\/az\/hekayeler\/(?:baslangic|orta|ireli)\/)([^\/]+)\/?$/;
    const azStoryMatch = normalizedUrl.match(azStoryPattern);
    if (azStoryMatch) {
      const [, path, story] = azStoryMatch;
      const enPath = urlMappings[path];
      if (enPath) {
        return `${enPath}${story}/`;
      }
    }
    
    // Fallback: if we can't find a specific mapping, default to the other language's home page
    return currentUrl.startsWith('/az/') ? '/' : '/az/';
  }
  
  // Update language switcher links
  function updateLanguageSwitcher() {
    const currentUrl = window.location.pathname;
    const englishLink = document.querySelector('.language-switcher .lang-link[href="/"]');
    const azerbaijaniLink = document.querySelector('.language-switcher .lang-link[href="/az/"]');
    
    if (currentUrl.startsWith('/az/')) {
      // On Azerbaijani page, update English link
      if (englishLink) {
        englishLink.href = getLanguageSwitchUrl(currentUrl);
      }
      if (azerbaijaniLink) {
        azerbaijaniLink.href = currentUrl;
      }
    } else {
      // On English page, update Azerbaijani link
      if (azerbaijaniLink) {
        azerbaijaniLink.href = getLanguageSwitchUrl(currentUrl);
      }
      if (englishLink) {
        englishLink.href = currentUrl;
      }
    }
  }
  
  // Initialize the language switcher
  updateLanguageSwitcher();
}
