import Div from '../atoms/StyledDiv';

const HeaderButtonGroup = (props: any): JSX.Element => {
  return <Div display="float">{props.children}</Div>;
};

export default HeaderButtonGroup;
