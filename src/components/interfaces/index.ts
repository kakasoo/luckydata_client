export interface ButtonProps {
  children?: JSX.Element | string | null;
  radius?: boolean;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  lineHeight?: string;
  borderRadius?: string;
  marginTop?: string;
  marginBottom?: string;
  onclick?: () => void;
  justifyContent?: string;
  background?: string;
  textAlign?: string;
  border?: string;
  outline?: string;
  marginRight?: string;
  backgroundColor?: string;
}

export interface imgProps {
  display?: string;
  marginLeft?: string;
  marginRight?: string;
  width?: string;
  src: string;
  overflow?: string;
  height?: string;
  marginTop?: string;
  alt?: string;
}

export interface inputProps {
  id?: string;
  name?: string;
  height?: string;
  maxWidth?: string;
  marginLeft?: string;
}

export interface pProps {
  position?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  marginTop?: string;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  marginRight?: string;
  margin?: string;
  height?: string;
  width?: string;
  fontWeight?: string;
}

export interface spanProps {
  position?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  marginRight?: string;
  height?: string;
  width?: string;
  left?: string;
  top?: string;
  fontWeight?: string;
  marginBottom?: string;
  fontFamily?: string;
  backgroundColor?: string;
}

export interface divProps {
  id?: string;
  position?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  marginRight?: string;
  height?: string;
  width?: string;
  left?: string;
  top?: string;
  fontWeight?: string;
  marginBottom?: string;
  fontFamily?: string;
  backgroundColor?: string;
  background?: string;
  overflow?: string;
  borderRadius?: string;
  whiteSpace?: string;
  wordBreak?: string;
  borderLeft?: string;
  caretColor?: string;
  zIndex?: string;
  maxWidth?: string;
  maxHeight?: string;
  objectFit?: string;
  marginLeft?: string;
  display?: string;
  justifyContent?: string;
  border?: string;
  borderBottom?: string;
  margin?: string;
  padding?: string;
  backgroundImage?: string;
  marginTop?: string;
  opacity?: string;
  transform?: string;
  alignItems?: string;
  textAlign?: string;
  boxSizing?: string;
  right?: string;
  bottom?: string;
  src?: string;
  onclick?: () => any;
}

export interface articleProps {
  title: string;
  index: number;
  articleID: number;
  trackUrl: string;
}

export interface article {
  aid: number;
  atitle: string;
}

export interface projectListProps {
  articles: article[];
  trackUrl: string;
}

export interface projectTitle {
  title: string;
}

export interface modalProps {
  className?: string;
  visible?: boolean;
  children?: JSX.Element;
}

export interface track {
  ID: number;
  DEPARTMENT: string;
}

export interface tableProps {
  dataName: string;
  data?: null | [];
}
