/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* 存储网站元数据 */
  siteMetadata: {
    title: "hello Gatsby",
    author: "kusou1"
  },
  /* Your site config here */
  plugins: [
    // 将json文件夹下的json添加到数据层当中
    {
      resolve:"gatsby-source-filesystem",
      options: {
        name: "json",
        path: `${__dirname}/json/`
      }
    },
    /* 把json数据转化成javascript对象 */
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ],
}
