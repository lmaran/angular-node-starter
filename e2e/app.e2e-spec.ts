import { Test3Page } from "./app.po";

describe("test3 App", () => {
  let page: Test3Page;

  beforeEach(() => {
    page = new Test3Page();
  });

  it("should display welcome message", done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual("Welcome to app!!"))
      .then(done, done.fail);
  });
});
