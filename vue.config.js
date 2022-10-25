const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        //prependData: `@import "@/assets/scss/_variables.scss";`
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve("src/assets"),
        "@common": path.resolve("src/common"),
        "@helpers": path.resolve("src/common/helpers"),
        "@models": path.resolve("src/common/models"),
        "@utils": path.resolve("src/common/utils"),
        "@components": path.resolve("src/components"),
        "@includes": path.resolve("src/components/includes"),
        "@content": path.resolve("src/components/content"),
        "@templates": path.resolve("src/components/templates"),
        "@mixins": path.resolve("src/mixins"),
        "@pages": path.resolve("src/pages"),
        "@services": path.resolve("src/services"),
        "@css": path.resolve("public/css"),
        "@scss": path.resolve("public/scss"),
        "@queries": path.resolve("src/queries"),
      },
    },
  },
};
