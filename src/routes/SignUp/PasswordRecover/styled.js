import styled from 'styled-components';
import { Button } from 'antd';
export const Container = styled.section`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  section {
    margin-bottom: 34px;
  }
`;
export const StyledButton = styled(Button)`
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
export const Hero = styled.h1`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  margin-bottom: 45px;
`;
export const Input = styled.input`
  background: #d9d9d9 !important;
  border-radius: 50px;
  border: none;
  height: 48px;
  width: 480px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-indent: 20px;

  ::placeholder {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    transform: translateX(20px);
  }
`;
export const Label = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 34px;
  margin: 8px 16px;
`;
export const ButtonContainer = styled.div`
  display: flex;
`;
export const GoogleButton = styled.button`
  width: 180px;
  height: 45px;
  background-color: white;
  border-radius: 50px;
  border: 2px solid black;
  font-weight: bold;
  font-size: 18px;
  margin: 0 30px 0 0;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Google = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const Forgot = styled.div`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 50px;
  cursor: pointer;
`;
export const More = styled.div`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 45px;
  cursor: pointer;
`;
export const Notice = styled.div`
  max-width: 480px;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
