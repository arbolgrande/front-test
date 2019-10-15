import * as puppeteer from 'puppeteer';
interface Target {
  url: string
  fileName: string
}
const urls: Target[] = [
  {url: 'https://google.com',  fileName: 'google'},
  {url: 'https://yahoo.co.jp', fileName: 'yahoo'}
]
const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  async function crawl(target: Target) {
    try {
      await page.goto(target.url)
      await page.screenshot({path: `./screenshot/${target.fileName}.png`, fullPage: true})
    } catch {
      console.log("Caught an Error")
    }
  }
  for(const url of urls) {
    await crawl(url)
  }
  await browser.close();
}
main();