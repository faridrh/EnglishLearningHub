module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/stories/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/stories/**/*.png");
  eleventyConfig.addPassthroughCopy("src/stories/**/*.jpeg");

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

  // Add dateIso filter for sitemap
  eleventyConfig.addFilter("dateIso", function(dateObj) {
    return new Date(dateObj).toISOString();
  });



  // Configure collections
  eleventyConfig.addCollection("vocabularyWords", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.data.collection === "vocabulary");
  });



  // Configure separate directories for Azerbaijani pages
  eleventyConfig.addCollection("azPages", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.startsWith('./src/az/');
    });
  });

  // Add a global data that helps templates know if they're in az directory
  eleventyConfig.addGlobalData("eleventyComputed", {
    isAzerbaijani: (data) => {
      return data.page.inputPath.startsWith('./src/az/');
    }
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
