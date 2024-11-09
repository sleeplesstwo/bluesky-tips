module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets/images");
	eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
	eleventyConfig.setBrowserSyncConfig({
	  files: './public/static/**/*.css',
	});
  
	return {
	  dir: {
		input: 'src',
		output: 'public',
	  },
	};
  };