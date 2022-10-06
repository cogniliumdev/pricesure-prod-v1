const siteUrl = process.env.DOMAIN;

module.exports = {
    siteUrl: siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' }
        ]
    },
    additionalSitemaps: [
        // `${siteUrl}/sitemap.xml`,
        `${siteUrl}/server-sitemap.xml`,
    ]
};