import Div from '../../atoms/StyledDiv';

const LoadingContents = (props: any): JSX.Element => {
  return (
    <Div
      position="relative"
      top="50%"
      left="50%"
      width="100%"
      alignItems="center"
      textAlign="center"
      transform="translate(-50%, -50%)"
      color="red"
      fontSize="100px"
      zIndex="1"
      fontFamily="InkLipquid"
    >
      {props.children}
    </Div>
  );
};

export default LoadingContents;
