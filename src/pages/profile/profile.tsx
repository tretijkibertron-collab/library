import Footer from "../../components/common/footer"
import Header from "../../components/common/header"
import ActiveBooksSection from "../../components/profile/activeBooksSection"
import HistorySection from "../../components/profile/historySection"
import ReaderInfo from "../../components/profile/readerInfo"
import './profile.css'
import { mockReaders } from "../../mocks/readers"
import type { IReader } from "../../types/reader.types"

const ProfilePage = () => {
  const reader: IReader = mockReaders[3];

  return(
  <div className="page-wrapper">
    <Header />
    {/* <!-- ========== MAIN ========== --> */}
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