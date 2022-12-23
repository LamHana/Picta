import styled from 'styled-components';
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
  align-items: center;
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
`;

export const Img = styled.img`
  width: 80px;
  height: 70px;
`;
