const plugins = [
	require("autoprefixer"),
	require("postcss-import"),
	require("postcss-nested"),
];

module.exports = {
	map: { inline: false },
	plugins
}