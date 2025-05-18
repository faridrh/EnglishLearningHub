module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Add a filter to limit array length (for featured posts)
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  // Add a filter to sort by date
  eleventyConfig.addFilter("sortByDate", function(array) {
    return array.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  });

  // Add a filter to find words by level
  eleventyConfig.addFilter("byLevel", function(vocabulary, level) {
    return vocabulary.filter(item => item.level === level);
  });

  // Add a filter to find videos by category
  eleventyConfig.addFilter("byCategory", function(videos, category) {
    return videos.filter(item => item.category === category);
  });

  // Add a shortcode for generating YouTube embeds
  eleventyConfig.addShortcode("youtube", function(id) {
    return `<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  });

  // Configure collections
  eleventyConfig.addCollection("vocabularyWords", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.data.collection === "vocabulary");
  });

  eleventyConfig.addCollection("videoLessons", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.data.collection === "video");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
