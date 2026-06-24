import Footer from "../../components/common/footer"
import Header from "../../components/common/header"
import ReaderList from "../../components/readers/readerList"
import './readers.css'
import { mockReaders } from "../../mocks/readers"

const ReadersPage = () => {
    return(
  <div className="page-wrapper">
    <Header />
    <main className="main-content">
      <div className="container">
        <h1 className="page-title">Читатели библиотеки</h1>
        <p className="page-subtitle">
          Всего читателей: <strong>{mockReaders.length}</strong>
        </p>

      <ReaderList readers={mockReaders}/>
      </div>
    </main>

    <Footer />

  </div>
    )
}

export default ReadersPage