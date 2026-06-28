import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pagesでは https://ユーザー名.github.io/リポジトリ名/ という
// サブパス配信になるため、base にリポジトリ名を指定する必要がある。
// リポジトリ名を変えた場合はここも合わせて変更すること。
export default defineConfig({
  plugins: [react()],
  base: "/diagram-tool/"
});
