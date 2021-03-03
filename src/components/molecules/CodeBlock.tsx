import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Span from '../atoms/Span';

export const CodeBlock = ({ language, value }: any) => {
  return (
    <SyntaxHighlighter language={language} style={prism}>
      {value}
    </SyntaxHighlighter>
  );
};

export const InlineCodeBlock = (props: any) => {
  return (
    <Span
      text={props.value}
      backgroundColor="rgba(135,131,120,0.15)"
      color="#EB5757"
    ></Span>
  );
};

export const BlockQuoteBlock = (props: any) => {
  return (
    <div
      style={{
        fontSize: '1.15em',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        borderLeft: '3px solid currentcolor',
        caretColor: 'rgb(55, 53, 47)',
        paddingLeft: '0.9em',
        paddingRight: '0.9em',
      }}
    >
      {props.children}
    </div>
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
