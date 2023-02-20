import NavBar from '../NavBar';
import Footer from '../Footer';
import { Container } from './styled.js';
const LayoutComponent = ({ children }) => {
  return (
    <>
      <Container>
        <NavBar />
        <div className="site-layout-background">{children}</div>
        <Footer />
      </Container>
    </>
  );
};

export default LayoutComponent;
