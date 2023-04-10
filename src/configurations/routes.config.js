const index = "/kindle";
const books = "books";
const authors = "authors";
const author = ":author";
const bookName = ":bookName";

const config = {
  routes: {
    index: `${index}`,
    books: `${index}/${books}`,
    authors: `${index}/${authors}`,
    bookQuotes: `${index}/${books}/${author}/${bookName}`,
    author: `${index}/${authors}/${author}`,
  },
  dynamicNames: {
    author,
    bookName,
  },
  getBookQuotesRoute(author, bookName) {
    return this.replaceAuthor(this.routes.bookQuotes, author).replace(
      this.dynamicNames.bookName,
      encodeURIComponent(bookName)
    );
  },
  getAuthorRoute(author) {
    return this.replaceAuthor(this.routes.author, author);
  },
  replaceAuthor(route, author) {
    return route.replace(this.dynamicNames.author, encodeURIComponent(author));
  },
};

export default config;
