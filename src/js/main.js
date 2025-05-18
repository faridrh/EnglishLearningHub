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
