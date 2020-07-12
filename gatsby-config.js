module.exports = {
  siteMetadata: {
    title: `SkyCorp`,
    siteUrl: `https://skycorp.netlify.app/`,
    description: `Creative Vision Supportive Community`,
    components: {
      appbar: {
        position: "sticky",
        links: [
          {
            title: "About",
            url: "/About"
          },
          {
            title: "Services",
            url: "/Services"
          },
          {
            title: "Portfolio",
            url: "/Portfolio"
          },
          {
            title: "ContactUs",
            url: "/ContactUs"
          },
          {
            title: "Profile",
            url: "/Profile"
          }
        ]
      },
      content: {
        links: [
        {
          title: "Lock 1"
          url: "/posts/Lock 1"
        }]
      },
      footer: {
        copyright: "skycorp",
        columns: [
          {
            heading: "TodayQuote",
            links: [
              {
                title: "Link 1",
                url: "#"
              },
              {
                title: "Link 2",
                url: "#"
              },
              {
                title: "Link 3",
                url: "#"
              }
            ]
          },
          {
            heading: "Column 2",
            links: [
              {
                title: "Link A",
                url: "#"
              },
              {
                title: "Link B",
                url: "#"
              },
              {
                title: "Link C",
                url: "#"
              }
            ]
          },
          {
            heading: "Column 3",
            links: [
              {
                title: "Link x",
                url: "#"
              },
              {
                title: "Link y",
                url: "#"
              },
              {
                title: "Link z",
                url: "#"
              }
            ]
          }
        ]
      }
    },
    templates: {
      home: {
        totalPosts: 3,
        template: "home"
      },
      pages: {
        path: "/content/pages/",
        template: "page"
      },
      posts: {
        path: "/content/posts/",
        pathPrefix: "posts",
        template: "post",
        filters: {
          tag: {
            pathPrefix: "tag",
            template: "tag",
            totalPosts: 3,
            pagination: {
              template: "resultsTag",
              resultsPerPage: 6
            }
          }
        },
        pagination: {
          template: "resultsAll",
          resultsPerPage: 6
        }
      }
    }
  },
  plugins: [
    { resolve: `gatsby-theme-sky-lite` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sky Lite`,
        short_name: `SkyLite`,
        start_url: `/`,
        background_color: `rebeccapurple`,
        theme_color: `rebeccapurple`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    }
  ]
};
