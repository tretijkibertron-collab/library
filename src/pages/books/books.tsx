import BookList from '../../components/books/bookList'
import './books.css'
import { mockBooks } from '../../mocks/books'

const BooksPage = () => {
  return (
    <>
      <h1 className="page-title">Каталог книг</h1>
      <p className="page-subtitle">
        Всего книг: <strong>{mockBooks.length}</strong>
      </p>

      <div className="page-toolbar">
        <div className="book-search">
          <input
            type="text"
            className="book-search-input"
            placeholder="🔍 Поиск по названию или автору..."
          />
          <button className="book-search-clear">✕</button>
        </div>
        <span className="search-result-count">Найдено: {mockBooks.length}</span>
      </div>
      <BookList books={mockBooks} />
    </>

  )
}

export default BooksPage