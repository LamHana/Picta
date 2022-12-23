import styled from 'styled-components';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { DropDownList } from '@progress/kendo-react-dropdowns';

export const Avt = styled.img`
  background-color: black;
  width: 260px;
  height: 260px;
  border-radius: 100%;
  position: absolute;
  transform: translateY(-50%);
  margin-left: 30px;
`;

export const Content = styled.div`
  margin-left: 320px;
  h1 {
    margin: 15px 0 0 0;
    font-weight: bold;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
  }
  span {
    font-size: 15px;
    font-family: 'Open Sans';
  }
`;

export const Branch = styled.div`
  color: #ff6d02;
  font-size: 15px;
  font-family: 'Open Sans';
  font-weight: 600;
`;

export const MyDropDown = styled(DropDownList)`
  .k-button-icon {
    color: #ff6d02;
  }
  font-family: 'Open Sans' !important ;
`;

export const Button = styled.button`
  width: 180px;
  height: 45px;
  background-color: #ff6d02;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  margin: 0 30px 0 0;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #ff6c00;
    box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
  }
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RatingContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const Rating = styled.div`
  background-color: #ececed;
  border-radius: 55px;
  color: #121522;
  width: 70px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 320px;
  span {
    margin-left: 5px;
    font-size: 16px;
    font-family: 'Open Sans';
  }
`;

export const RatingPrice = styled.div`
  margin-left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Money = styled(MonetizationOnIcon)`
  color: #ff6d02;
`;

export const Clock = styled(AccessTimeIcon)``;

export const OpenTime = styled.div`
  margin-left: 60px;
  background-color: #ececed;
  border-radius: 55px;
  color: #121522;
  width: 170px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 5px;
    display: flex;
    font-size: 16px;
    font-family: 'Open Sans';
  }
`;

export const PointContainer = styled.div`
  background-color: #ececed;
  border-radius: 55px;
  color: #121522;
  font-size: 20px;
  width: 650px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  margin: 40px auto 40px auto;
`;

export const Wrapper = styled.div`
  h2 {
    font-size: 16px;
    font-family: 'Open Sans';
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    margin: 0;
    color: #121522;
  }
  div {
    margin-top: 20px;
    font-family: 'Josefin Sans';
    margin-left: 5px;
    display: flex;
    color: #ff6d02;
    font-weight: bold;
    font-size: 30px;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Description = styled.div`
  h2 {
    font-family: 'Josefin Sans';
    margin: 0;
    color: #ff6d02;
    font-weight: 600;
    font-size: 30px;
  }

  div {
    margin-top: 10px;
    font-size: 16px;
    font-family: 'Open Sans';
    color: #121522;
  }
`;
