import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Span from '../atoms/Span';

export const CodeBlock = ({ language, value }: any) => {
  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {value}
    </SyntaxHighlighter>
  );
};

export const InlineCodeBlock = (props: any) => {
  return <Span text={props.value} backgroundColor="#ff0"></Span>;
};

export const BlockQuoteBlock = (props: any) => {
  return (
    <div
      style={{
        borderLeft: '10px solid #aaa',
        paddingLeft: '10px',
        margin: '5px',
      }}
    >
      {props.children}
    </div>
  );
};

export const TableCellBlock = (props: any) => {
  const style: any = {
    textAlign: props.align ? props.align : 'center',
    padding: '5px',
  };

  if (props.isHeader) {
    style.background = '#ff0';
    style.border = '1px solid #ccc';
    style.borderLeft = '0px';
    style.borderRight = '0px';
  } else {
    style.borderBottom = '1px solid #eee';
  }

  return <td style={style}>{props.children}</td>;
};
