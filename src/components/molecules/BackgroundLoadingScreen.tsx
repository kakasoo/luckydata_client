import Div from '../atoms/StyledDiv';

const BackgroundLoadingScreen = (props: any): JSX.Element => {
  return (
    <Div
      position="absolute"
      top="0px"
      left="0px"
      height="100%"
      width="100%"
      background="rgb(0, 0, 0)"
      opacity="0.4"
      zIndex="1"
    >
      {props.children}
    </Div>
  );
};

export default BackgroundLoadingScreen;
