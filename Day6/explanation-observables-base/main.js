const data = require('./data.json');

const { of } = require('rxjs');
const { map, flatMap, zip } = require('rxjs/operators');

const getBooksFromServer = () => {

  return of(data.books);
};

const getAuthorsFromServer = () => {

  return of(data.authors);
};

const getBooksJavascriptInTitle = () => {

  return getBooksFromServer()
    .pipe(map((books) => {

      return books.filter(b => b.title.includes('JavaScript'));
    }))
}

// getBooksJavascriptInTitle().subscribe((books) => {
//   console.log('books: ', books);
// });


const getAuthorById = (id) => {

  return getAuthorsFromServer()
    .pipe(map((authors) => {
      return authors.find(a => a.id === id);
    }));
};

// getAuthorById(1).subscribe((author) => {
//   console.log('author', author);
// });


const getBooksWithYear = () => {
  return getBooksFromServer()
    .pipe(map((books) => {
      return books.map((b) => {
        let f = new Date(b.published);
        return {id: b.id, title: b.title, author_id: b.authorId,
        year: f.getFullYear(), publisher: b.publisher, pages: b.pages};
      });
    }));
};

// getBooksWithYear().subscribe((books) => {
//   console.log(books);
// });

const getBookNames = (minPages) => {
  return getBooksFromServer()
    .pipe(map((books) => {
      return books.filter((b) => b.pages > minPages)
        .map((bs) => bs.title);
    }));
};

// getBookNames(300).subscribe((booksNames) => {
//   console.log(booksNames);
// });

const getAuthorOfBook = (bookTitle) => {
  return getBooksFromServer()
    .pipe(map((books) => {
      return books.find((b) => b.title === bookTitle);
    }), flatMap((book) => {
      return getAuthorById(book.id);
    }))
};

getAuthorOfBook('Speaking JavaScript').subscribe((author) => {
  console.log(author);
});

//REALIZAR DOS PETICIONES A LA VEZ. Y OBTENER LOS LIBROS Y AUTORES.
const getBooksAndAuthors = () => {

  return getBooksFromServer()
    .pipe(zip(getAuthorsFromServer()));
};

// getBooksAndAuthors().subscribe((booksAndAuthors) => {
//   console.log(booksAndAuthors);
// });

/////////

const getBookByIdWithAuthor = (bookId) => {
  return getBooksFromServer()
    .pipe(flatMap((books) => {
      const book = books.find(b => b.id === bookId);
    return getAuthorById(book.authorId).pipe(zip(of(book)));
  }), map((authorAndBook) => {
    const [author, book] = authorAndBook;

    delete book.authorId;
    book.author = author;

    return book;
  }));
};

getBookByIdWithAuthor(1).subscribe((book) => {
  console.log(book);
})
