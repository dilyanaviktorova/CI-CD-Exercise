const assert = require('assert');
const getFetch = async () => global.fetch || (await import('node-fetch')).default;

suite('About page', function() {
  test('Page title', async function() {
    const fetch = await getFetch();
    let res = await fetch("http://localhost:8888/about");
    let body = await res.text();
    assert.ok(body.includes("<title>About</title>"));
    assert.ok(body.includes("<h1>About</h1>"));
  });
});
