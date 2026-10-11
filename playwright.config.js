import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./scripts",

  use: {
    browserName: "chromium",
  },

  webServer: {
    command: "pnpm dev -- --host 127.0.0.1",
    url: "http://127.0.0.1:5173",
    reuseExistingServer: !process.env.CI,
  },
});
