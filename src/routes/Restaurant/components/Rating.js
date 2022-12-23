import StarIcon from '@mui/icons-material/Star';
import { Rating, RatingPrice, RatingContainer, Money, Clock, OpenTime } from './styled';

function RatingRestaurant({ restaurant }) {
  return (
    <RatingContainer>
      <Rating>
        <StarIcon style={{ color: '#ff6d02' }}></StarIcon>
        <span>{restaurant.rating}</span>
      </Rating>
      <OpenTime>
        <Clock></Clock>
        <span>
          {restaurant.openTime} - {restaurant.closeTime}
        </span>
      </OpenTime>
      <RatingPrice>
        {Array.from({ length: restaurant.ratingByPrice }, (_, i) => (
          <Money key={i} />
        ))}
      </RatingPrice>
    </RatingContainer>
  );
}
export default RatingRestaurant;
