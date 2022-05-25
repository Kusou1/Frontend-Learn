/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* 存储网站元数据 */
  siteMetadata: {
    title: "hello Gatsby",
    author: "kusou1",
  },
  /* Your site config here */
  plugins: [
    // 将json文件夹下的json添加到数据层当中
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "json",
        path: `${__dirname}/json/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/posts/`,
      },
    },
    /* 将数据层原始的markdown数据转换成对象数据 */
    "gatsby-transformer-remark",
    /* 把json数据转化成javascript对象 */
    "gatsby-transformer-json",
    /* 图像优化 */
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    /* 获取strapi */
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        accessToken: "d4ba52c61413c4871d580e8044b39294c6df2cced24aba501ae03a6686f11394c5ff44cc064f2c62e3623747d70c75808a25a7edac891da7173581f65ab51c8e146652e217032216f2c43af65a053471ee6975cc0479136dd1a0a1186a715cc01b3330ecf6e20ab78ab3eb9ad8c4b39e7d2db8ec927a4e2ae11438b899507775",
        collectionTypes: [`post`],
        loginData: {
          identifier:"zhangshaohong1997@gmail.com",
          password:"Zhang8860119"
        }
      },
    },
  ],
}
