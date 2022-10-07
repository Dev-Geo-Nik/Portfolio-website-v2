import type { GatsbyConfig } from "gatsby";


require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});


const config: GatsbyConfig = {
  siteMetadata: {
    defaultTitle: `George Nikolaidis`,
    description: `Front-end developer portfolio website`,
    titleTemplate :`George Nikolaidis | %s `,
    author: `George Nikolaidis front end developer `,
    siteUrl: `https://georgenikolaidis.com`,
    defaultImage:"",
    twitterUsername:"@username"
  },
  
  plugins: [
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://hotburger-restaurant.netlify.app',
        sitemap: 'https://hotburger-restaurant.netlify.app/sitemap.xml ',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
 
    `gatsby-plugin-sass`,
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
     "gatsby-plugin-react-helmet", 
     "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },

   "gatsby-plugin-sharp",
   "gatsby-transformer-sharp", { 
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    // __key: "images"
  },
  
  // {
  //   resolve: `gatsby-source-strapi`,
  //   options: {
  //     apiURL: process.env.STRAPI_API_URL,
  //     accessToken: process.env.STRAPI_TOKEN,
  //     collectionTypes: ['category',"gallery","testimonial","menu"],
  //     // singleTypes: []
  //   },
  // }, 
]
};

export default config;
