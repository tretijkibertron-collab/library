import type { IBook } from "../../types/book.types"

interface BookItemProps{
  book: IBook
}

const BookItem = ({book}: BookItemProps) => {

  const className = book.isAvailable ? "badge-available" : "badge-unavailable"
  const statusText = book.isAvailable ? 'Доступна' : 'Выдана';
    return(
          <article className="book-card">
            <div className="book-cover">
              <div className="book-cover-placeholder">
                <span className="book-cover-emoji">📖</span>
              </div>
              <span className={`book-status-badge badge ${className}`}>{statusText}</span>
            </div>
            <div className="book-content">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <div className="book-meta">
                <span className="book-year">{book.year}</span>
                <span className="book-genre">{book.genre}</span>
              </div>
              <p className="book-description">
                {book.description}
              </p>
              <button className="btn btn-primary btn-block">Подробнее</button>
            </div>
          </article>
    )
}

export default BookItem