import Div from '../../atoms/StyledDiv';

const LoginModalInner = (props: any): JSX.Element => {
  return (
    <Div
      boxSizing="border-box"
      position="relative"
      boxShadow="0 0 6px 0 rgba(0, 0, 0, 0.5)"
      backgroundColor="#fff"
      borderRadius="10px"
      width="400px"
      height="605px"
      maxWidth="480px"
      top="50%"
      transform="translateY(-50%)"
      margin="0 auto"
      padding="50px 30px"
    >
      {props.children}
    </Div>
  );
};

export default LoginModalInner;
