import { test } from "@playwright/test";

const viewConfig = [
  { width: 375, height: 812, fileName: "mobile.png", screenShotName: "mobile" },
  {
    width: 768,
    height: 1024,
    fileName: "tablet.png",
    screenShotName: "tablet",
  },
  {
    width: 1440,
    height: 1000,
    fileName: "desktop.png",
    screenShotName: "desktop",
  },
];

for (const view of viewConfig) {
  test(`screenshot from ${view.screenShotName} view`, async ({ page }) => {
    await page.setViewportSize({ width: view.width, height: view.height });
    await page.goto("http://127.0.0.1:5173");
    await page.screenshot({
      fullPage: true,
      path: `screenshots/${view.fileName}`,
    });
  });
}
