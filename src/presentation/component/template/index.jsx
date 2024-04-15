import Footer from "../organisms/Footer";
import Navbar from "../molecules/Navbar";
const Template = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Template;
