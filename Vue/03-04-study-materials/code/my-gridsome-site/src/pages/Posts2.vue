<template>
  <Layout>
    <div>
      <h2>Posts 2</h2>
      <ul>
        <li v-for="edge in $page.posts.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">{{edge.node.title}}</g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>
<script>
export default {
  name: "Posts2",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>
<style scoped>
</style>