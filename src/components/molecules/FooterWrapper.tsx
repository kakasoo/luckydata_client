import Div from '../atoms/StyledDiv';

const FooterWrapper = (props: any): JSX.Element => {
  return (
    <Div backgroundColor="black" zIndex="2">
      {props.children}
    </Div>
  );
};

export default FooterWrapper;
