import ReaderList from "../../components/readers/readerList"
import './readers.css'
import { mockReaders } from "../../mocks/readers"

const ReadersPage = () => {
  return (
    <>
    <div className="page-header">
          <div>
      <h1 className="page-title">Читатели библиотеки</h1>
      <p className="page-subtitle">
        Всего читателей: <strong>{mockReaders.length}</strong>
      </p>
      </div>
      <button className="btn btn-primary" id="add-reader-btn">
            + Добавить читателя
      </button>
    </div>
      <ReaderList readers={mockReaders} />
      </>
  )
}

export default ReadersPage