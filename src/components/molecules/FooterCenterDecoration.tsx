import Div from '../atoms/StyledDiv';

const FooterCenterDecoration = (props: any): JSX.Element => {
  return (
    <Div
      width="86px"
      height="3px"
      backgroundColor="linear-gradient(to right, #3fbbfe, #a541ff)"
      marginBottom="9px"
    >
      {props.children}
    </Div>
  );
};

export default FooterCenterDecoration;
