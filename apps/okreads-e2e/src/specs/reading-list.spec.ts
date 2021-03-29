import { $, $$, browser, ElementFinder, ExpectedConditions } from 'protractor';

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });

  fit('When: I click on finish in side bar book button should be replaced with finished label', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    await browser.sleep(10000);
    // add a book
    const bookButtons: ElementFinder[] = await $$('[data-testing="book-add-button"]');
    bookButtons.forEach((el) => {
      el.getText().then(x => console.log(x));
    })

    // open reading list
    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    const buttons: ElementFinder[] = await $$('[data-testing="finished-button"]');
    const button = buttons[0];
    await button.click();
  });
});
