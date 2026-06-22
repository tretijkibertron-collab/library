import Footer from "../../components/common/footer"
import Header from "../../components/common/header"
import ReaderList from "../../components/readers/readerList"
import './readers.css'

const ReadersPage = () => {
    return(
  <div className="page-wrapper">
    <Header />
    <main className="main-content">
      <div className="container">
        <h1 className="page-title">Читатели библиотеки</h1>
        <p className="page-subtitle">
          Всего читателей: <strong>5</strong>
        </p>

      <ReaderList/>
      </div>
    </main>

    <Footer />

  </div>
    )
}

export default ReadersPage