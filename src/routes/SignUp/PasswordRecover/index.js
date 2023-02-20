import { Container, Hero, Label, Input, StyledButton, ButtonContainer, Forgot, More, Notice, Footer } from './styled';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { auth, sendPasswordReset } from '../../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { Form } from 'antd';
import { toastError, toastSuccess } from '../../../components/ToastNotification';
function Login() {
  const [form] = Form.useForm();
  const [user, loading] = useAuthState(auth);

  //   const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) console.log(user);
  }, [user, loading]);
  const handleFinish = (values) => {
    toastSuccess('Email đã được gửi đi ');
    sendPasswordReset(values.email);
  };

  const handleFinishFailed = () => {
    toastError('Email không đúng');
  };
  return (
    <Container>
      <Hero>Lấy lại Tài Khoản</Hero>
      <Form
        form={form}
        name="form1"
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        initialValues={{
          email: '',
        }}
      >
        <section>
          <Label>Tài Khoản :</Label>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Email Không được để trống' },
              {
                message: 'Email không tồn tại',
                validator: (_, value) => {
                  if (/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(value)) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject('Some message here');
                  }
                },
              },
            ]}
            validateTrigger={handleFinish}
          >
            <Input type="text" placeholder="E-mail Address" />
          </Form.Item>
          <Notice>Nhập email của bạn,một thông báo sẽ được gửi về mail cá nhân tồn tại !!</Notice>
        </section>
        <Footer>
          <ButtonContainer>
            <StyledButton type="submit" htmlType="submit">
              Gửi
            </StyledButton>
          </ButtonContainer>
        </Footer>
      </Form>
      <Forgot>
        <Link to="/recover">Quên mật Khẩu</Link>
      </Forgot>
      <More>
        Chưa có Tài khoản,Đăng kí Tại <Link to="/signUp"> Đây</Link>
      </More>
    </Container>
  );
}

export default Login;
