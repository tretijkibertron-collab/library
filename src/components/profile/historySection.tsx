import type { IBookHistory } from "../../types/reader.types"
import type { IBook } from "../../types/book.types";
import { mockBooks } from "../../mocks/books";

interface HistoryProps {
  history: IBookHistory[];
}
const HistorySection = ({history}: HistoryProps) => {
    return(
          <section className="profile-section">
            <h2 className="profile-section-title">📚 История чтения</h2>
            <div className="history-list">
              {history.map(book => {
                const findBook: IBook | undefined = mockBooks.find(b => b.id === book.bookId);
                if(!findBook) {
                  return null;
                }
                return(
                  <div className="history-item" key={book.bookId}>
                    <span className="history-book">{findBook.title}</span>
                    <span className="history-date">
                      Взята: {book.takenAt.toLocaleDateString('ru-Ru')}
                      , {book.returnedAt 
                      ? `Возвращена: ${book.returnedAt.toLocaleDateString('ru-Ru')}`
                      : 'Активна' }
                    </span>
                  </div>

                )
              })}
            </div>
          </section>
    )
}

export default HistorySection