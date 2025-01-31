import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";

const Layout: React.FC = () => {
  const isLogged = true;

  return (
    <>
      <div className="container">
        <Header />
        <div className="main-block">
          {isLogged && <Sidebar />}
          <main className="main-content">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
