import { restaurant } from '../../../data';
import AddressDropDownList from './AddressDropDown';
import { Avt, Content, Button, Branch, FlexRow, Container, Description } from './styled';
import { BodyPage } from '../styled';
import '@progress/kendo-theme-default/dist/all.css';
import RatingRestaurant from './Rating';
import Point from './Point';

function ListRestaurant() {
  return (
    <BodyPage>
      {restaurant.map((restaurant, index) => {
        return (
          <div key={index}>
            <Avt src={restaurant.logo}></Avt>
            <FlexRow>
              <Content>
                <h1>{restaurant.name}</h1>
                {restaurant.typeByFood.map((food, index) => {
                  if (index == restaurant.typeByFood.length - 1) return <span key={index}>{food} </span>;
                  else return <span key={index}>{food} - </span>;
                })}
                <Branch>{restaurant.branch} chi nhánh</Branch>
              </Content>{' '}
              <AddressDropDownList></AddressDropDownList>
              <Button>Đặt bàn</Button>
            </FlexRow>
            <RatingRestaurant restaurant={restaurant}></RatingRestaurant>
            <Point restaurant={restaurant}></Point>
            <Container>
              <Description>
                <h2>Giới thiệu</h2>
                <div>{restaurant.description}</div>
              </Description>
            </Container>
          </div>
        );
      })}
    </BodyPage>
  );
}

export default ListRestaurant;
