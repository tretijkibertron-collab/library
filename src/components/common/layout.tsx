import { Outlet } from "react-router-dom"
import Footer from "./footer"
import Header from "./header"

const Layout = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="main-content">
                <div className="container">
                    <Outlet />
                </div>
            </main >
            <Footer />
        </div >

    )
}

export default Layout
