// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    // Include the miragejs package to be processed by babel-loader
    config.module
      .rule("js")
      .include.add(/node_modules\/miragejs/) // assuming your issue is with miragejs
      .end()
      .use("babel-loader")
      .loader("babel-loader")
      .tap((options) => {
        // modify the options if needed
        return options;
      });
  },
};
