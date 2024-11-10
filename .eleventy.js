module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets/images");
	eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
	eleventyConfig.markdownTemplateEngine("njk");
  
	return {
	  dir: {
		input: "src",
		data: "_data",
		includes: "_includes",
		layouts: "_layouts",
		output: "public",
	  },
	};
  };