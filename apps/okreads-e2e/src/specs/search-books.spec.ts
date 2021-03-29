import { $, $$, browser, ElementFinder, ExpectedConditions, protractor } from 'protractor';

describe('When: Use the search feature', () => {
  it('Then: I should be able to search books by title', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    const items = await $$('[data-testing="book-item"]');
    expect(items.length).toBeGreaterThan(1);
  });

  xit('Then: I should see search results as I am typing', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    // TODO: Implement this test!
  });

  fit('Then: I should see a snackbar when button clicked', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    const buttons: ElementFinder[] = await $$('[data-testing="add-button"]:not([disabled])');
    const button = buttons[0];
    await button.click();
    const snackBar: ElementFinder = $('.mat-snack-bar-container');
    const found = await browser.wait(ExpectedConditions.visibilityOf(snackBar), 5000);
    const text = await snackBar.getText();
    expect(text).toEqual('Added');
  })
});
