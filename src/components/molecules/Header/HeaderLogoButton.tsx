import Div from '../../atoms/StyledDiv';

const HeaderWrapper = (props: any): JSX.Element => {
  return (
    <Div
      height="40px"
      width="192px"
      backgroundImage="url(/images/header_logo_black.png)"
      marginTop="10px"
    >
      {props.children}
    </Div>
  );
};

export default HeaderWrapper;
