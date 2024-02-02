import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  routes,
  npmClient: "yarn",
  plugins: [
    "@umijs/plugins/dist/antd",
    "@umijs/plugins/dist/initial-state",
    "@umijs/plugins/dist/model",
  ],
  antd: {},
  model: {},
  initialState: {},
});
