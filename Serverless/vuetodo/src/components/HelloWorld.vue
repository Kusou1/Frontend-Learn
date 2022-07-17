<template>
  <div>
    <button @click="getData">send</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    async getData() {
      var backdata = await axios({
        url:
          "https://test-2gmsdnvd04b10a9f-1304201118.ap-guangzhou.app.tcloudbase.com/express-starter/todo",
      });
      console.log(backdata);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
