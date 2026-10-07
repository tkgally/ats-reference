const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '/opt/node-tools/node_modules/playwright');
(async () => {
  const [,, file, outdir, ms] = process.argv;
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 }, recordVideo: { dir: outdir, size: { width: 1280, height: 720 } } });
  const p = await ctx.newPage();
  await p.goto('file://' + file, { waitUntil: 'networkidle' });
  await p.waitForTimeout(parseInt(ms));
  await p.screenshot({ path: outdir + '/poster.png' });
  await ctx.close(); await b.close();
})();
