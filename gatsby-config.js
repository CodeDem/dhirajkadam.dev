module.exports = {
  siteMetadata: {
    title: `Dhiraj Kadam | A Full Stack Developer Blog`,
    description: ``,
    author: `@codedem`,
    siteUrl: `https://dhirajkadam.dev`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'demo.wp-api.org' or 'www.example-site.com'
         */
        baseUrl: "cms.dhirajkadam.dev",
        // The protocol. This can be http or https.
        protocol: "https",
        // The rest api route prefix that your WordPress site is using.
        // Sometimes this is modified by WordPress plugins.
        // If not set, it uses the default of "wp-json"
        restApiRoutePrefix: "wp-json",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // The IDs provided to this array should correspond to the `post_id` value when defining your
        // options page using the provided `acf_add_options_page` method, in your WordPress setup
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          // htaccess_user: "your-htaccess-username",
          // htaccess_pass: "your-htaccess-password",
          // htaccess_sendImmediately: false,

          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          // If two-factor authentication is enabled then you need to create an Application-Specific Password,
          // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: "54793",
          wpcom_user: "contact@dhirajkadam.dev",
          wpcom_pass: process.env.WORDPRESS_PASSWORD,

          // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
          // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in WordPress wp-api.
          // plugin, you can specify user and password to obtain access token and use authenticated requests against WordPress REST API.
          // jwt_user: process.env.JWT_USER,
          // jwt_pass: process.env.JWT_PASSWORD,
          // jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        // Set cookies that should be send with requests to WordPress as key value pairs
        cookies: {},
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://source-url.com",
        //   replacementUrl: "https://replacement-url.com",
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        // Blacklisted routes using glob patterns
        // excludedRoutes: ["**/posts/1456"],
        // Set this to keep media sizes.
        // This option is particularly useful in case you need access to
        // URLs for thumbnails, or any other media detail.
        // Defaults to false
        keepMediaSizes: false,
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function ({ entities }) {
          return entities
        },
        // The normalizers option allows you to manipulate the array of internal
        // normalizers that are applied to entities after they're fetched
        // from WordPress.
        // You can add your own normalizers to this array by adding an object
        // that contains name and normalizer properties.
        // Name is the name of your normalizer, and normalizer is a function that
        // should return the array of entities that are passed to it.
        // This is useful if you need more control over the order of normalizers,
        // instead of your normalizer being applied after the built in normalizers (as is the case with the normalizer option).
        normalizers: normalizers => [
          ...normalizers,
          {
            name: "nameOfTheFunction",
            normalizer: function ({ entities }) {
              // manipulate entities here
              return entities
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        // Class prefix for <pre> tags containing syntax highlighting;
        // defaults to 'language-' (e.g. <pre class="language-js">).
        // If your site loads Prism into the browser at runtime,
        // (e.g. for use with libraries like react-live),
        // you may use this to prevent Prism from re-processing syntax.
        // This is an uncommon use-case though;
        // If you're unsure, it's best to use the default value.
        classPrefix: "language-",
        // This is used to allow setting a language for inline code
        // (i.e. single backticks) by creating a separator.
        // This separator is a string and will do no white-space
        // stripping.
        // A suggested value for English speakers is the non-ascii
        // character '›'.
        inlineCodeMarker: null,
        // This lets you set up language aliases.  For example,
        // setting this to '{ sh: "bash" }' will let you use
        // the language "sh" which will highlight using the
        // bash highlighter.
        aliases: {},
        // This toggles the display of line numbers globally alongside the code.
        // To use it, add the following line in gatsby-browser.js
        // right after importing the prism color scheme:
        //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
        // Defaults to false.
        // If you wish to only show line numbers on certain code blocks,
        // leave false and use the {numberLines: true} syntax below
        showLineNumbers: false,
        // If setting this to true, the parser won't handle and highlight inline
        // code used in markdown i.e. single backtick code like `this`.
        noInlineHighlight: false,
        // This adds a new language definition to Prism or extend an already
        // existing language definition. More details on this option can be
        // found under the header "Add new language definition or extend an
        // existing language" below.
        languageExtensions: [
          {
            language: "superscript",
            extend: "javascript",
            definition: {
              superscript_types: /(SuperType)/,
            },
            insertBefore: {
              function: {
                superscript_keywords: /(superif|superelse)/,
              },
            },
          },
        ],
        // Customize the prompt used in shell output
        // Values below are default
        prompt: {
          user: "root",
          host: "localhost",
          global: false,
        },
        // By default the HTML entities <>&'" are escaped.
        // Add additional HTML escapes by providing a mapping
        // of HTML entities and their escape value IE: { '}': '&#123;' }
        escapeEntities: {},
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `dhirajkadam-dev`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],

        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: process.env.GOOGLE_OPTIMIZE_TRACKING_ID,

        // Enables Google Optimize Experiment ID
        // experimentId: process.env.GOOGLE_EXPERIMENT_ID,

        // Set Variation ID. 0 for original 1,2,3....
        // variationId: process.env.GOOGLE_OPTIMIZE_VARIATION_ID,

        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "dhirajkadam.dev",
      },
    },
  ],
}
