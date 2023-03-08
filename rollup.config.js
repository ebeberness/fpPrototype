import { nodeResolve } from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";

module.exports = {
  input: "fpPrototype.js",
  output: {
    dir: "dist",
  },
  plugins: [
    copy({
      targets: [{ src: "fpPrototype.html", dest: "dist" }],
    }),
    nodeResolve(),
  ],
};