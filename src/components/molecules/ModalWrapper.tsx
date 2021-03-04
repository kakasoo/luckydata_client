import Div from '../atoms/StyledDiv';

const ModalWrapper = (props: any): JSX.Element => {
  const display = props.visible ? 'block' : 'none';
  return (
    <Div
      id="modalBackground"
      boxSizing="border-box"
      display={display}
      position="fixed"
      top="0"
      right="0"
      bottom="0"
      left="0"
      zIndex="1000"
      overflow="auto"
      onclick={props.onclick}
    >
      {props.children}
    </Div>
  );
};

export default ModalWrapper;
