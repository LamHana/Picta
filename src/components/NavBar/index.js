import { Container, LeftContainer, RightContainer, Img, Wrapper, StyledMenu, StyledMenuITem } from './styled.js';
import logo from '../../assets/logo/orangeblack.png';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Dropdown } from 'antd';
import { useEffect } from 'react';
import { SolutionOutlined, PoweroffOutlined, BookOutlined } from '@ant-design/icons';
import { auth, logout } from '../../firebase.js';
import { useSelector } from 'react-redux';
// import localStorageUtils from '../../utils/localStorageUtils.js';
import { useAuthState } from 'react-firebase-hooks/auth';
function NavBar() {
  const [user] = useAuthState(auth);
  const info = useSelector((state) => state.auth);

  // const token = localStorageUtils.getItem('token');
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const widgetMenu = (
    <StyledMenu>
      <StyledMenuITem key={0}>{`Chào ${info.userName}`}</StyledMenuITem>
      <StyledMenuITem key={1}>
        <SolutionOutlined className="icon" size={48} />
        Hồ sơ
      </StyledMenuITem>
      <StyledMenuITem key={2}>
        <BookOutlined size={48} />
        Lịch Sử Đặt Bàn
      </StyledMenuITem>
      <StyledMenuITem key={3} onClick={handleLogout}>
        <PoweroffOutlined className="icon" size={48} />
        Đăng Xuất
      </StyledMenuITem>
    </StyledMenu>
  );

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user]);
  return (
    <Wrapper>
      <Container>
        <LeftContainer>
          <Link to="/home">
            <Img src={logo} />
          </Link>
        </LeftContainer>
        <RightContainer>
          {!user && (
            <>
              <div>
                <Link to="/login">Đăng nhập</Link>
              </div>
              <div>
                <Link to="/signUp">Đăng ký</Link>
              </div>
            </>
          )}
          {user && (
            <Dropdown overlay={widgetMenu}>
              <Avatar size={50} src={info.ava} />
            </Dropdown>
          )}
        </RightContainer>
      </Container>
    </Wrapper>
  );
}

export default NavBar;
