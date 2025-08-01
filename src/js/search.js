document.addEventListener('DOMContentLoaded', function() {
  // Get the search elements
  const searchButton = document.getElementById('search-button');
  const searchContainer = document.getElementById('search-container');
  const searchInput = document.getElementById('search-input');
  const searchSubmit = document.getElementById('search-submit');
  const searchResults = document.getElementById('search-results');
  
  // Search data - will be populated with content from the page
  let searchData = [];
  
  // Exit early if essential search elements don't exist
  if (!searchInput || !searchSubmit || !searchResults) {
    return;
  }
  
  // Toggle search dropdown
  if (searchButton && searchContainer) {
    searchButton.addEventListener('click', function() {
      searchContainer.classList.toggle('active');
      if (searchContainer.classList.contains('active')) {
        searchInput.focus();
      }
    });
    
    // Close search when clicking outside
    document.addEventListener('click', function(event) {
      if (!searchContainer.contains(event.target) && !searchButton.contains(event.target)) {
        searchContainer.classList.remove('active');
      }
    });
  }
  
  // Process search input
  function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }
    
    // Ensure we have search data
    if (searchData.length === 0) {
      collectSearchData();
    }
    
    // Perform search
    const results = performSearch(query);
    displaySearchResults(results);
  }
  
  // Add event listeners for search
  searchSubmit.addEventListener('click', handleSearch);
  searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      handleSearch();
    } else {
      // Live search as user types
      if (event.target.value.length >= 2) {
        handleSearch();
      } else if (event.target.value.length === 0) {
        searchResults.innerHTML = '';
      }
    }
  });
  
  // Collect search data from the page
  function collectSearchData() {
    searchData = [];
    
    // On vocabulary pages (English and Azerbaijani)
    if (window.location.pathname.includes('/vocabulary/') || window.location.pathname.includes('/luget/')) {
      const cards = document.querySelectorAll('.vocabulary-card');
      
      cards.forEach(card => {
        const term = card.querySelector('.word')?.textContent || '';
        const definition = card.querySelector('.definition')?.textContent || '';
        const level = card.querySelector('.level-badge')?.textContent || '';
        
        if (term) {
          searchData.push({
            title: term,
            content: definition,
            meta: level,
            url: window.location.pathname + '#' + term.toLowerCase().replace(/\s+/g, '-')
          });
        }
      });
    }
    
    // On grammar pages (English and Azerbaijani)
    else if (window.location.pathname.includes('/grammar/') || window.location.pathname.includes('/qrammatika/')) {
      // Get all headings and content sections
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const content = document.querySelector('.grammar-content') || document.querySelector('.page-content');
      
      headings.forEach(heading => {
        const title = heading.textContent.trim();
        const nextElement = heading.nextElementSibling;
        let description = '';
        
        // Get content after the heading
        if (nextElement) {
          if (nextElement.tagName === 'P') {
            description = nextElement.textContent.substring(0, 150);
          } else if (nextElement.tagName === 'UL' || nextElement.tagName === 'OL') {
            const listItems = nextElement.querySelectorAll('li');
            description = Array.from(listItems).slice(0,2).map(li => li.textContent).join(', ');
          }
        }
        
        if (title && title !== 'Interactive Practice Exercises') {
          searchData.push({
            title: title,
            content: description,
            meta: 'Grammar Topic',
            url: window.location.pathname + '#' + title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
          });
        }
      });
      
      // Add examples from the page
      const examples = document.querySelectorAll('strong, em, .example');
      examples.forEach((example, index) => {
        const text = example.textContent.trim();
        if (text.length > 10 && text.length < 100 && !text.includes('•')) {
          searchData.push({
            title: `Example: ${text}`,
            content: 'Grammar example from this page',
            meta: 'Example',
            url: window.location.pathname + '#example-' + index
          });
        }
      });
    }
    
    // On video pages
    else if (window.location.pathname.includes('/videos/')) {
      const cards = document.querySelectorAll('.video-card');
      
      cards.forEach(card => {
        const title = card.querySelector('.video-title')?.textContent || '';
        const description = card.querySelector('.video-description')?.textContent || '';
        const category = card.querySelector('.category-badge')?.textContent || '';
        
        if (title) {
          searchData.push({
            title: title,
            content: description,
            meta: category,
            url: window.location.pathname + '#' + title.toLowerCase().replace(/\s+/g, '-')
          });
        }
      });
    }
    
    // On exercises page
    else if (window.location.pathname.includes('/exercises/')) {
      // Get all exercise cards from different levels
      const exerciseCards = document.querySelectorAll('.exercise-card');
      
      exerciseCards.forEach(card => {
        const title = card.querySelector('.exercise-title')?.textContent || '';
        const description = card.querySelector('.exercise-description')?.textContent || '';
        const level = card.querySelector('.difficulty-badge')?.textContent || '';
        const link = card.querySelector('.exercise-link')?.getAttribute('href') || '';
        
        if (title) {
          searchData.push({
            title: title,
            content: description,
            meta: `${level} Exercise`,
            url: link
          });
        }
      });
      
      // Add section headings and content
      const headings = document.querySelectorAll('h1, h2, h3, h4');
      headings.forEach(heading => {
        const title = heading.textContent.trim();
        const nextElement = heading.nextElementSibling;
        let description = '';
        
        if (nextElement && nextElement.tagName === 'P') {
          description = nextElement.textContent.substring(0, 150);
        }
        
        if (title && !title.includes('Grammar Adventure') && !title.includes('Features')) {
          searchData.push({
            title: title,
            content: description,
            meta: 'Section',
            url: window.location.pathname + '#' + title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
          });
        }
      });
      
      // Add feature cards content
      const featureCards = document.querySelectorAll('.feature-card');
      featureCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent || '';
        const description = card.querySelector('p')?.textContent || '';
        
        if (title) {
          searchData.push({
            title: title,
            content: description,
            meta: 'Feature',
            url: window.location.pathname + '#' + title.toLowerCase().replace(/\s+/g, '-')
          });
        }
      });
    }
    
    // Homepage - collect both vocabulary and videos (English and Azerbaijani)
    else if (window.location.pathname === '/' || window.location.pathname === '/az/') {
      const vocabCards = document.querySelectorAll('.vocabulary-preview .card');
      const videoCards = document.querySelectorAll('.video-preview .card');
      
      vocabCards.forEach(card => {
        const term = card.querySelector('.card-title')?.textContent || '';
        const definition = card.querySelector('.card-definition')?.textContent || '';
        const level = card.querySelector('.card-badge')?.textContent || '';
        
        if (term) {
          searchData.push({
            title: term,
            content: definition,
            meta: `Vocabulary - ${level}`,
            url: `/vocabulary/${level.toLowerCase()}/`
          });
        }
      });
      
      videoCards.forEach(card => {
        const title = card.querySelector('.card-title')?.textContent || '';
        const description = card.querySelector('.card-description')?.textContent || '';
        const category = card.querySelector('.card-badge')?.textContent || '';
        
        if (title) {
          searchData.push({
            title: title,
            content: description,
            meta: `Video - ${category}`,
            url: `/videos/${category.toLowerCase()}/`
          });
        }
      });
    }
  }
  
  // Perform search against collected data
  function performSearch(query) {
    // Ensure we have data to search
    if (searchData.length === 0) {
      collectSearchData();
    }
    
    // Return items that match the query
    return searchData.filter(item => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
      );
    }).slice(0, 10); // Limit to 10 results
  }
  
  // Display search results
  function displaySearchResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML = '<p>No results found. Try a different search term.</p>';
      return;
    }
    
    const html = results.map(result => {
      return `
        <div class="search-result-item">
          <h4 class="search-result-title"><a href="${result.url}">${result.title}</a></h4>
          <p class="search-result-description">${result.content.substring(0, 100)}${result.content.length > 100 ? '...' : ''}</p>
          <small>${result.meta}</small>
        </div>
      `;
    }).join('');
    
    searchResults.innerHTML = html;
  }
  
  // Collect initial search data
  collectSearchData();
  
  // Initialize search immediately if on vocabulary page
  if (window.location.pathname === '/vocabulary/') {
    // Add some default searchable content from the page
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach(card => {
      const title = card.querySelector('.level-title')?.textContent || '';
      const description = card.querySelector('.level-description')?.textContent || '';
      const stats = card.querySelector('.level-stats')?.textContent || '';
      
      if (title) {
        searchData.push({
          title: `${title} Level Vocabulary`,
          content: `${description} ${stats}`,
          meta: 'Vocabulary Level',
          url: card.querySelector('a')?.href || window.location.pathname
        });
      }
    });
    
    // Add tip cards as searchable content
    const tipCards = document.querySelectorAll('.tip-card');
    tipCards.forEach(card => {
      const title = card.querySelector('h3')?.textContent || '';
      const description = card.querySelector('p')?.textContent || '';
      
      if (title) {
        searchData.push({
          title: title,
          content: description,
          meta: 'Learning Tip',
          url: window.location.pathname + '#tips'
        });
      }
    });
  }
});
