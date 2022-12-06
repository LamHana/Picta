import { Container, LeftContainer, RightContainer, Img } from './styled.js';
import logo from '../../assets/logo/orangeblack.png';
function NavBar() {
  return (
    <Container>
      <LeftContainer>
        <Img src={logo} />
      </LeftContainer>
      <RightContainer>
        <div>Đăng nhập</div>
        <div>Đăng kí</div>
      </RightContainer>
    </Container>
  );
}

export default NavBar;
