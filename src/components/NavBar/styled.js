import styled from 'styled-components';
import { Menu } from 'antd';
export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(10px);
`;

export const LeftContainer = styled.div`
  padding: 10px 10px 0 10px;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  div {
    cursor: pointer;
    margin: 8px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Open Sans';
  }
  div:nth-child(2) {
    margin-right: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 70px;
  cursor: pointer;
`;
export const User = styled.img`
  width: 70px;
  border-radius: 100%;
  &:hover {
  }
`;
export const UserContainer = styled.div`
  &:hover {
    div {
      display: block;
    }
  }
  div {
    border-radius: 15px;
    border: 2px solid black;
    position: absolute;
    display: none;
  }
`;

export const StyledMenu = styled(Menu)`
  width: 200px;
`;
export const StyledMenuITem = styled(Menu.Item)`
  .anticon {
    margin-right: 30px;
  }
  font-size: 16px;
`;
