import { Angular4.0demoPage } from './app.po';

describe('angular4.0demo App', () => {
  let page: Angular4.0demoPage;

  beforeEach(() => {
    page = new Angular4.0demoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
