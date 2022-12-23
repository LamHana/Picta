import { Container, LeftContainer, RightContainer, Img, Wrapper } from './styled.js';
import logo from '../../assets/logo/orangeblack.png';
function NavBar() {
  return (
    <Wrapper>
      <Container>
        <LeftContainer>
          <Img src={logo} />
        </LeftContainer>
        <RightContainer>
          <div>Đăng nhập</div>
          <div>Đăng kí</div>
        </RightContainer>
      </Container>
    </Wrapper>
  );
}

export default NavBar;
