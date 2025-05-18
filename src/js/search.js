document.addEventListener('DOMContentLoaded', function() {
  // Get the search elements
  const searchButton = document.getElementById('search-button');
  const searchContainer = document.getElementById('search-container');
  const searchInput = document.getElementById('search-input');
  const searchSubmit = document.getElementById('search-submit');
  const searchResults = document.getElementById('search-results');
  
  // Search data - will be populated with content from the page
  let searchData = [];
  
  // Toggle search dropdown
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
  
  // Process search input
  function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
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
    }
  });
  
  // Collect search data from the page
  function collectSearchData() {
    searchData = [];
    
    // On vocabulary pages
    if (window.location.pathname.includes('/vocabulary/')) {
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
    
    // Homepage - collect both vocabulary and videos
    else if (window.location.pathname === '/') {
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
});
