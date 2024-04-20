import Footer from "../../organisms/Footer";
import Navbar from "../../organisms/Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
