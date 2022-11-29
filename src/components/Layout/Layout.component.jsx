import NavBar from '../NavBar';
import Footer from '../Footer';
const LayoutComponent = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="site-layout-background">{children}</div>
      <Footer />
    </>
  );
};

export default LayoutComponent;
