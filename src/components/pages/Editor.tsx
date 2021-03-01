import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { fetchDataHook } from '../../utils';
import Span from '../atoms/Span';
import LoadingScreen from '../organisms/LoadingScreen';
import MarkdownEditor from '../templates/MarkdownEditor';

const EditContext = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 50px auto;
`;

const Editor = (props: any): JSX.Element => {
  const article_id = props.match.params.articles_id;
  let article_title = '';
  let article_contents = '';

  const articles: any = fetchDataHook(
    `/api/articles/${article_id}`,
    60 * 60 * 1000,
  );

  const textScreen: any = document.getElementById('edit_md');
  const titleInput: any = document.getElementById('title');

  if (articles) {
    article_title = articles.TITLE;
    article_contents = articles.CONTENTS;
  }

  const editArticle = async () => {
    const cookie = localStorage.getItem('token');
    const text = textScreen?.value || '';
    const title = titleInput?.value || '';

    await fetch(`/api/articles/${article_id}`, {
      method: 'PUT',
      headers: {
        Authorization: cookie || '',
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        CONTENTS: text || '',
        TITLE: title,
      }),
    });
  };

  return (
    <EditContext>
      <Span
        text={`article ID : ${article_id}`}
        fontSize="38px"
        fontWeight="bold"
      ></Span>
      <hr></hr>
      <Span text="제목 : "></Span>
      <input
        id="title"
        style={{ width: '46.5%', marginBottom: '15px' }}
        defaultValue={article_title}
      ></input>
      {articles ? (
        <MarkdownEditor defaultValue={articles.CONTENTS}></MarkdownEditor>
      ) : (
        <LoadingScreen></LoadingScreen>
      )}
      <button
        style={{ float: 'right', marginTop: '20px' }}
        onClick={editArticle}
      >
        수정
      </button>
    </EditContext>
  );
};

export default Editor;
