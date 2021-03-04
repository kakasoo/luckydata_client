import styled from 'styled-components';
import { divProps } from '../interfaces';

const StyledDiv = styled.div<divProps>`
  position: ${props => props.position || 'static'};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  color: ${props => props.color || 'black'};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  letter-spacing: ${props => props.letterSpacing};
  margin-right: ${props => props.marginRight};
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  font-weight: ${props => props.fontWeight};
  margin-bottom: ${props => props.marginBottom};
  font-family: ${props => props.fontFamily};
  background-color: ${props => props.backgroundColor};
  overflow: ${props => props.overflow};
  border-radius: ${props => props.borderRadius};
  white-space: ${props => props.whiteSpace};
  word-break: ${props => props.wordBreak};
  border-left: ${props => props.borderLeft};
  caret-color: ${props => props.caretColor};
  z-index: ${props => props.zIndex};
  max-width: ${props => props.maxWidth};
  margin-left: ${props => props.marginLeft};
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  border: ${props => props.border};
  background: ${props => props.background};
`;

const Div = ({
  children,
  ...rest
}: divProps & {
  children?: JSX.Element | JSX.Element[] | string;
}): JSX.Element => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default Div;
