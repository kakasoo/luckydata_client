import Div from '../atoms/StyledDiv';

const FooterCenterWrapper = (props: any): JSX.Element => {
  return (
    <Div
      maxWidth="610px"
      marginLeft="auto"
      marginRight="auto"
      paddingTop="40px"
      paddingBottom="40px"
    >
      {props.children}
    </Div>
  );
};

export default FooterCenterWrapper;
