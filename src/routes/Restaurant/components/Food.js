import { FoodContainer, LeftContainer, RightContainer, FoodWrapper } from './styled';

function Food({ restaurant }) {
  return (
    <FoodWrapper>
      {restaurant.menu.map((meal, index) => {
        return (
          <FoodContainer key={index}>
            <LeftContainer>
              <img src={meal.img} alt="menu" />
            </LeftContainer>
            <RightContainer>
              {meal.name}
              <div>{meal.price}</div>
            </RightContainer>
          </FoodContainer>
        );
      })}
    </FoodWrapper>
  );
}

export default Food;
