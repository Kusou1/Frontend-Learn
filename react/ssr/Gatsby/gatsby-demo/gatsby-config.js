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
    {
      resolve:"gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/posts/`
      }
    },
    /* 将数据层原始的markdown数据转换成对象数据 */
    "gatsby-transformer-remark",
    /* 把json数据转化成javascript对象 */
    "gatsby-transformer-json",
    /* 图像优化 */
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ],
}
