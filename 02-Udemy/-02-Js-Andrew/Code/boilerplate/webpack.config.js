import { resolve, join } from "path";

export const entry = ["@babel/polyfill", "./src/index.js"];
export const output = {
  filename: "bundle.js",
  path: resolve(__dirname, "./public/scripts"),

};
export const module = {
  rules: [
    {
      test: /\.?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    },
  ],
};
export const devServer = {
  static: {
    directory: join(__dirname, "./public"),
  },
  compress: true,
  port: 9000,
  publicPath: "/scripts/",
};
export const devtool = "source-map";
