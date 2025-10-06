const assert = require('assert');
const getFetch = async () => global.fetch || (await import('node-fetch')).default;

suite('Home page', function() {
  test('Page title', async function() {
    const fetch = await getFetch();
    let res = await fetch("http://localhost:8888/");
    let body = await res.text();
    assert.ok(body.includes("<h1>Students Registry</h1>"));
  });
  
  test('Students count', async function() {
    const fetch = await getFetch();
    let res = await fetch("http://localhost:8888/");
    let body = await res.text();
    assert.ok(body.includes("Registered students: <b>2</b>"));
  });
});
