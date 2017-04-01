import { AhiPage } from './app.po';

describe('ahi App', () => {
  let page: AhiPage;

  beforeEach(() => {
    page = new AhiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
