import { BombayjsCompanionAppPage } from './app.po';

describe('bombayjs-companion-app App', () => {
  let page: BombayjsCompanionAppPage;

  beforeEach(() => {
    page = new BombayjsCompanionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
