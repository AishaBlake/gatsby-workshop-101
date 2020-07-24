module.exports = {
    siteMetadata: {
        title: `Aisha Blake`,
        author: `Aisha Blake`,
        description: `Aisha Blake's personal site for Gatsby 101 at CodeLand`,
        siteUrl: `https://workshop-site-101.netlify.app`,
        social: [
            {
                name: `Twitter`,
                url: `https://twitter.com/AishaBlake`,
            },
            {
                name: `GitHub`,
                url: `https://github.com/AishaBlake`,
            },
        ],
    },
    plugins: [
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-theme-blog`,
            options: {
                basePath: `/blog`,
                mdxOtherwiseConfigured: true
            }
        }
    ]
}