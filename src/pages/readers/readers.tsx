import ReaderList from "../../components/readers/readerList"
import './readers.css'
import { mockReaders } from "../../mocks/readers"

const ReadersPage = () => {
  return (
    <>
      <h1 className="page-title">Читатели библиотеки</h1>
      <p className="page-subtitle">
        Всего читателей: <strong>{mockReaders.length}</strong>
      </p>

      <ReaderList readers={mockReaders} />
    </>
  )
}

export default ReadersPage