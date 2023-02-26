import { Container, HeadPage, BodyPage } from './styled';
import { restaurants } from '../../data/index';
import ListRestaurant from './components/ListRestaurants';
function Restaurant() {
  return (
    <Container>
      <HeadPage>
        <img alt="hana" src={`${restaurants[0].pic}`}></img>
      </HeadPage>
      <BodyPage>
        <ListRestaurant></ListRestaurant>
      </BodyPage>
    </Container>
  );
}

export default Restaurant;
