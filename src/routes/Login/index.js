import {
  Container,
  Hero,
  Label,
  Input,
  StyleButton,
  ButtonContainer,
  GoogleButton,
  Google,
  Forgot,
  More,
  Notice,
  Footer,
} from './styled';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle, logInWithEmailAndPassword } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import GoogleIcon from '../../assets/logo/google.png';

import { Form } from 'antd';
import { toastError } from '../../components/ToastNotification';
import { useDispatch } from 'react-redux';
import { setUserName, setAva } from '../../components/NavBar/slice';

function Login() {
  const [form] = Form.useForm();
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      if (user.displayName) {
        console.log(user.photoURL);
        dispatch(setUserName(user.displayName));
        dispatch(setAva(user.photoURL));
      }
    }
  }, [user, loading]);
  const handleFinish = (values) => {
    logInWithEmailAndPassword(values.email, values.password);
  };

  const handleFinishFailed = () => {
    toastError('Tài khoản hoặc mật khẩu không đúng');
  };
  return (
    <Container>
      <Hero>Đăng Nhập</Hero>
      <Form
        form={form}
        name="form1"
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        initialValues={{
          email: '',
          password: '',
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
        </section>
        <section>
          <Label>Mật Khẩu :</Label>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Mật khẩu không được để trống' },
              {
                message: 'Mật khẩu không đúng format',
                validator: (_, value) => {
                  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject('Some message here');
                  }
                },
              },
            ]}
            validateTrigger={handleFinish}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
        </section>
        <Footer>
          <Notice>Mật khẩu phải chứa ít nhất 8 kí tự , một kí tự in hoa, một kí tự in thường và 1 chữ số</Notice>
          <ButtonContainer>
            <StyleButton type="submit" htmlType="submit">
              Đăng nhập
            </StyleButton>
            <GoogleButton onClick={signInWithGoogle}>
              <Google src={GoogleIcon} />
              Google
            </GoogleButton>
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
