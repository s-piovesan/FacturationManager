import { FacturationAngularClientPage } from './app.po';

describe('facturation-angular-client App', () => {
  let page: FacturationAngularClientPage;

  beforeEach(() => {
    page = new FacturationAngularClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
