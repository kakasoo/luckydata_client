import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Span from '../atoms/Span';
import Div from '../atoms/StyledDiv';

// ```로 만든 코드 블럭
export const CodeBlock = ({ language, value }: any) => {
  return (
    <SyntaxHighlighter language={language} style={prism}>
      {value}
    </SyntaxHighlighter>
  );
};

// ``를 이용해 강조한 구문
export const InlineCodeBlock = (props: any) => {
  return (
    <Span
      text={props.value}
      backgroundColor="rgba(135,131,120,0.15)"
      color="#EB5757"
    ></Span>
  );
};

// >로 만든 인용구문
export const BlockQuoteBlock = (props: any) => {
  return (
    <Div
      fontSize="1.15em"
      whiteSpace="pre-wrap"
      wordBreak="break-word"
      borderLeft="3px solid currentcolor"
      caretColor="rgb(55, 53, 47)"
      paddingLeft="0.9em"
      paddingRight="0.9em"
    >
      {props.children}
    </Div>
  );
};

export const TableCellBlock = (props: any) => {
  const style: any = {
    textAlign: props.align ? props.align : 'center',
  };

  if (props.isHeader) {
    style.background = 'rgba(135,131,120,0.15)';
    style.border = '1px solid #ccc';
  } else {
    style.borderBottom = '1px solid #ccc';
  }

  return <td style={style}>{props.children}</td>;
};

export const TextBlock = (props: any) => {
  return <Span color="inherit" fontSize="1.125rem" text={props.value}></Span>;
};

export const LinkBlock = (props: any) => (
  <a href={props.href} style={{ color: 'rgb(12, 166, 120)' }}>
    {props.children}
  </a>
);
