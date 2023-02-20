import { Container, HeadPage, BodyPage } from './styled';
import { restaurant } from '../../data/index';
import ListRestaurant from './components/ListRestaurants';
function Restaurant() {
  return (
    <Container>
      <HeadPage>
        <img alt="hana" src={`${restaurant[0].pic}`}></img>
      </HeadPage>
      <BodyPage>
        <ListRestaurant></ListRestaurant>
      </BodyPage>
    </Container>
  );
}

export default Restaurant;
