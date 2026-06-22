import Footer from "../../components/common/footer"
import Header from "../../components/common/header"
import ActiveBooksSection from "../../components/profile/activeBooksSection"
import HistorySection from "../../components/profile/historySection"
import ReaderInfo from "../../components/profile/readerInfo"
import './profile.css'

const ProfilePage = () => {
    return(
  <div className="page-wrapper">
    <Header />
    {/* <!-- ========== MAIN ========== --> */}
    <main className="main-content">
      <div className="container">
        <div className="profile-wrapper">
          <ReaderInfo />
          <ActiveBooksSection/>
          <HistorySection />
        </div>
      </div>
    </main>
<Footer/>
  </div>
      )
}

export default ProfilePage