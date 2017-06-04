import { LazyLoadingExamplePage } from './app.po';

describe('lazy-loading-example App', () => {
  let page: LazyLoadingExamplePage;

  beforeEach(() => {
    page = new LazyLoadingExamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
