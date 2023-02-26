import styled from 'styled-components';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Dropdown, Space, Typography } from 'antd';

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

export const MyDropDown = styled(Dropdown)`
  width: 310px;
  height: 20px;
  text-overflow: clip;
`;

export const MySpace = styled(Space)`
  color: #ff6d02;
  font-family: 'Open Sans' !important ;
`;
export const MyTypography = styled(Typography)``;
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
  margin-bottom: 80px;
`;

export const SpaceRestaurant = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 54px 37px;
  grid-template-areas:
    'h1 h3 h3'
    'h2 h3 h3';
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
  img:nth-child(1) {
    grid-area: h1;
  }

  img:nth-child(2) {
    grid-area: h2;
  }

  img:nth-child(3) {
    grid-area: h3;
  }
`;

export const TabMenu = styled(Tab)`
  width: 400px;
`;

export const BoxMenu = styled(Box)`
  button {
    color: #121522;
    font-size: 18px;
  }
  .css-1aquho2-MuiTabs-indicator {
    background-color: #ff6d02;
  }

  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: #ff6d02;
  }
`;
export const Menu = styled.div``;

export const FoodWrapper = styled.div``;

export const FoodContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: #ececed;
  border-radius: 55px;
  display: flex;
  margin-bottom: 50px;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 4px 15px 0 gray;
  }
`;

export const LeftContainer = styled.div`
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 55px;
  }
  margin-right: 20px;
`;

export const RightContainer = styled.div`
  font-weight: 800;
  font-family: 'Open Sans';
  font-size: 18px;
  margin-top: 20px;
  div {
    font-size: 25px;
    position: absolute;
    bottom: 30px;
    right: 40px;
  }
`;
