import { Container, Hero, Label, Input, StyledButton, ButtonContainer, Forgot, More, Notice, Footer } from './styled';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { Form } from 'antd';
import { toastError, toastSuccess } from '../../components/ToastNotification';
function Recover() {
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
    toastSuccess('Đăng Kí thành công');
    registerWithEmailAndPassword(values.name, values.email, values.password);
  };

  const handleFinishFailed = () => {
    toastError('Vui lòng nhập đúng thông tin !!');
  };
  return (
    <Container>
      <Hero>Đăng Ký</Hero>
      <Form
        form={form}
        name="form1"
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
      >
        <section>
          <Label>Tên của Bạn :</Label>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Tên không được để trống' }]}
            validateTrigger={handleFinish}
          >
            <Input type="text" placeholder="Nguyen Van A" />
          </Form.Item>
        </section>
        <section>
          <Label>Email:</Label>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Email không được Trống' },
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
            <Input type="text" placeholder="Địa chỉ Email" />
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
            <Input type="password" placeholder="Mật Khẩu" />
          </Form.Item>
        </section>
        <Footer>
          <Notice>Mật khẩu phải chứa ít nhất 8 kí tự , một kí tự in hoa, một kí tự in thường và 1 chữ số</Notice>

          <ButtonContainer>
            <StyledButton type="submit" htmlType="submit">
              Đăng Ký
            </StyledButton>
          </ButtonContainer>
        </Footer>
      </Form>
      <Forgot>
        <Link to="/recover">Quên mật Khẩu</Link>
      </Forgot>
      <More>
        Đã có Tài khoản,Đăng kí Tại <Link to="/login"> Đây</Link>
      </More>
    </Container>
  );
}

export default Recover;
