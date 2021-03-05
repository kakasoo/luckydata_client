import Div from '../../atoms/StyledDiv';

const EditForm = (props: any): JSX.Element => {
  return (
    <Div
      maxWidth="100%"
      justifyContent="spaceBetween"
      display="flex"
      border="1px solid rgb(220,220, 220)"
    >
      {props.children}
    </Div>
  );
};

export default EditForm;
