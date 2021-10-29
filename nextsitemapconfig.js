module.exports = {
	siteUrl: "https://www.supportguys.co.uk",
	changefreq: "weekly",
	priority: 0.7,
	generateRobotsTxt: true,
	exclude: ["/tickets"],
	// Default transformation function
	transform: async (config, path) => {
		return {
			loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
			changefreq: config.changefreq,
			priority: config.priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
			alternateRefs: config.alternateRefs ?? []
		}
	},
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/"
			}
		]
	}
}
