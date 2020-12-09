const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(
      "https://donate.cancerresearchuk.org/support-us/your-donation"
    );
    await browser.close();
    console.log("Done ✨");
  } catch (error) {
    console.error(error);
  }
})();
