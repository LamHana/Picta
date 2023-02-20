import { Container, PhoneNumber, Email, Media, Info, Wrapper } from './styled.js';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <Wrapper>
      <Container>
        <PhoneNumber>
          <div>Call</div>
          <div>(+84) 786981691</div>
        </PhoneNumber>
        <Email>
          <div>Email</div>
          <div>picta.rsv@gmail.com</div>
        </Email>
        <Media>
          <div>Follow</div>
          <Info>
            <FacebookIcon></FacebookIcon>
            <div>/picta.rsv</div>
          </Info>
        </Media>
      </Container>
    </Wrapper>
  );
}

export default Footer;
