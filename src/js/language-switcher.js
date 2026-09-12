// Language switcher with smart redirects for vocabulary pages
document.addEventListener('DOMContentLoaded', function() {
  const azLangLink = document.getElementById('az-lang-link');
  
  if (azLangLink) {
    azLangLink.addEventListener('click', function(e) {
      e.preventDefault();
      
      const currentPath = window.location.pathname;
      let targetUrl = '/az/';
      
      // Handle pages with a direct Azerbaijani adaptation
      if (currentPath === '/grammar/beginner/articles/') {
        targetUrl = '/az/qrammatika/baslangic/articles/';
      }
      else if (currentPath === '/grammar/beginner/plural-nouns/') {
        targetUrl = '/az/qrammatika/baslangic/plural-nouns/';
      }
      else if (currentPath === '/grammar/beginner/possessive-adjectives/') {
        targetUrl = '/az/qrammatika/baslangic/possessive-adjectives/';
      }
      else if (currentPath === '/grammar/beginner/present-simple/') {
        targetUrl = '/az/qrammatika/baslangic/present-simple/';
      }
      else if (currentPath === '/grammar/beginner/present-continuous/') {
        targetUrl = '/az/qrammatika/baslangic/present-continuous/';
      }
      else if (currentPath === '/grammar/beginner/subject-pronouns/') {
        targetUrl = '/az/qrammatika/baslangic/subject-pronouns/';
      }
      // Handle vocabulary pages - redirect all vocabulary subpages to main Azerbaijani vocabulary page
      else if (currentPath.includes('/vocabulary/')) {
        targetUrl = '/az/luget/';
      }
      // Handle grammar pages - redirect all grammar subpages to main Azerbaijani grammar page
      else if (currentPath.includes('/grammar/')) {
        targetUrl = '/az/qrammatika/';
      }
      // Handle stories pages - redirect all stories subpages to main Azerbaijani stories page
      else if (currentPath.includes('/stories/')) {
        targetUrl = '/az/hekayeler/';
      }
      // Handle exercises page
      else if (currentPath.includes('/exercises')) {
        targetUrl = '/az/calishmalar/';
      }
      // Handle about page
      else if (currentPath.includes('/about')) {
        targetUrl = '/az/haqqinda/';
      }
      // Default to Azerbaijani homepage
      else {
        targetUrl = '/az/';
      }
      
      // Navigate to the target URL
      window.location.href = targetUrl;
    });
  }
});