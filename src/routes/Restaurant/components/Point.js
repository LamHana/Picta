import { PointContainer, Wrapper } from './styled';
import { points } from './data';
function Point({ restaurant }) {
  return (
    <PointContainer>
      {points.map((point, index) => {
        return (
          <Wrapper key={index}>
            <h2>{point.name}</h2>
            <div>{restaurant.points[index]}/5</div>
          </Wrapper>
        );
      })}
    </PointContainer>
  );
}
export default Point;
