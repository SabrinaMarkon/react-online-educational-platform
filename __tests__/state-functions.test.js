import renderer from 'react-test-renderer';

describe('Addition', () => {
    it('knows that 2 plus 2 make 4', () => {
        expect(2 + 2).toBe(4);
    });
});

// describe('When the page loads', () => {
//     test('it loads the correct title', async() => {
//        const html = await page.$eval('h1', e => e.innerHTMl);
//     });
// });
