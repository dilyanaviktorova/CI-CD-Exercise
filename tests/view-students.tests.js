const assert = require('assert');
const getFetch = async () => global.fetch || (await import('node-fetch')).default;

suite('View Students page', function() {
  test('Page title', async function() {
    const fetch = await getFetch();
    let res = await fetch("http://localhost:8888/students");
    let body = await res.text();
    assert.ok(body.includes("<h1>Registered Students</h1>"));
  });
  
  test('Students list', async function() {
    const fetch = await getFetch();
    let res = await fetch("http://localhost:8888/students");
    let body = await res.text();
    assert.ok(body.includes("<ul><li>Steve (steve@gmail.com)</li><li>Tina (tina@yahoo.com)</li></ul>"));
  });
});
