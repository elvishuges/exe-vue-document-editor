<template>
  <div id="app">
    <vue-document-editor :content.sync="content" />
  </div>
</template>

<script>
import VueDocumentEditor from "vue-document-editor";

export default {
  name: "App",
  components: {
    VueDocumentEditor,
  },
  data() {
    return {
      content: [
        "<h1>Hello!</h1>Fill this page with text and new pages will be created as it overflows.",
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vue-editor {
  overflow: scroll;
  max-height: 100%;
}
</style>