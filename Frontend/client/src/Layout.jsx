import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {!isHomePage && <Navbar />}
      {children}
      {!isHomePage && <Footer />}
    </>
  );
};

export default Layout;
