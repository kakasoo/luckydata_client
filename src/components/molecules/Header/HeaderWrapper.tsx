import Div from '../../atoms/StyledDiv';

const HeaderWrapper = (props: any): JSX.Element => {
  return (
    <Div
      display="flex"
      height="60px"
      maxWidth="1240px"
      background="white"
      borderBottom="2px solid #eeeeee"
      margin="0 auto"
      padding="0 8px"
      zIndex="10"
      justifyContent="space-between"
    >
      {props.children}
    </Div>
  );
};

export default HeaderWrapper;
