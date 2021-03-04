import Div from '../../atoms/StyledDiv';

const FooterCenterTextWrapper = (props: any): JSX.Element => {
  return <Div display="flex">{props.children}</Div>;
};

export default FooterCenterTextWrapper;
