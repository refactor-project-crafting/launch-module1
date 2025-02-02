import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";
import { useContext } from "react";
import AuthContext from "../../auth/AuthContext/AuthContext";
import Protected from "../Protected/Protected";

const Layout: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <Header />
        <div className="main-block">
          {isLoggedIn && <Sidebar />}
          <main className="main-content">
            <Protected>
              <Outlet />
            </Protected>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
