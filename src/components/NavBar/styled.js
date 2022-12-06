import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 0 20px;
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin: 8px;
    font-size: 20px;
    font-weight: 800;
    font-family: 'Open Sans';
  }
  div:nth-child(2) {
    margin-right: 0;
  }
`;

export const Img = styled.img`
  width: 90px;
  height: 76px;
`;
