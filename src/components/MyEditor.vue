<template>
  <vue-document-editor :content.sync="content" />
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
</style>