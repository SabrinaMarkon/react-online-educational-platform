/**
 * @jest-environment node
 */

// for Jest snapshots:
import renderer from 'react-test-renderer';

jest.setTimeout(30000);
const puppeteer = require('puppeteer');

describe('Addition', () => {
    it('knows that 2 plus 2 make 4', () => {
        expect(2 + 2).toBe(4);
    });
});

/* set up our browser and how we want to use it.
We can test different browser options */
const isDebugging = ()=> {
    const debugging_mode = {
      headless: false,
      slowMo: 250,
      devtools: true
    }
    return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
  }
/* We don't want to create a new browser and page for every single test
so put browser and page outside the test.
The two vars below are the browser and page instances */
let browser;
let page;
beforeAll(async() => {
    browser = await puppeteer.launch(isDebugging());
    page = await browser.newPage();
     /* use page.goto to tell puppeteer where to navigate inside the browser */
     await page.goto('http://localhost:8080');
    page.setViewport({ width: 500, height: 2400 });
});
describe('When the page loads', () => {
    test('it loads the correct h1 title in the content', async() => {
       const html = await page.$eval('h1', e => e.innerHTML);
       expect(html).toBe('React Online Educational Platform');
    }, 15000);
});
