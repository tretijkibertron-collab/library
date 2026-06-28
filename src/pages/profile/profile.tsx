import Footer from "../../components/common/footer"
import Header from "../../components/common/header"
import ActiveBooksSection from "../../components/profile/activeBooksSection"
import HistorySection from "../../components/profile/historySection"
import ReaderInfo from "../../components/profile/readerInfo"
import './profile.css'
import { mockReaders } from "../../mocks/readers"
import type { IReader } from "../../types/reader.types"
import { useParams } from "react-router-dom"

const ProfilePage = () => {
    const{id} = useParams();
console.log(id);

  const reader: IReader | undefined = mockReaders.find(r => r.id === id);
  if(!reader){
    return(
      <h3>
         Читатель не найден
      </h3>
    )
  }
  return(
  <div className="page-wrapper">
    <Header />
    <main className="main-content">
      <div className="container">
        <div className="profile-wrapper">
          <ReaderInfo reader={reader}/>
          <ActiveBooksSection />
          <HistorySection history={reader.booksHistory}/>
        </div>
      </div>
    </main>
<Footer/>
  </div>
      )
}

export default ProfilePage