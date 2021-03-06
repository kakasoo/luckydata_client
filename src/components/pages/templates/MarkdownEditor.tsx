// import react, react-markdown-editor-lite, and a markdown parser you like
import * as React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

export default (props: any) => {
  return (
    <MdEditor
      id="edit"
      style={{ height: '500px' }}
      renderHTML={text => mdParser.render(text)}
      defaultValue={props.defaultValue}
    />
  );
};
