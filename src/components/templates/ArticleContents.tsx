import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import ReactMarkdown from 'react-markdown';
import setting from '../../config';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ArticleContents = (props: any): JSX.Element => {
  const curArticle = props.match.params.article_id;
  const [article, setArticle]: [
    article: never[] & { TITLE?: string; CONTENTS?: string },
    setArticle: Dispatch<SetStateAction<never[]>>,
  ] = useState([]);

  const getArticle = () => {
    const cookie = localStorage.getItem('token');
    try {
      const url = setting.FETCH_ADDRESS + `/api/articles/${curArticle}`;
      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: cookie || '',
        },
      })
        .then(res => res.json())
        .then(res => setArticle(res.result));
    } catch (error) {
      throw new Error('authCheck error');
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      <div id="markdown_title">
        <ReactMarkdown
          source={
            '# 마크다운으로 쓴 제목입니다. : ' +
            (!article.TITLE ? '' : article.TITLE)
          }
        />
      </div>
      <div id="markdown_contents">
        <ReactMarkdown
          source={
            '### 이것은 마크다운으로 쓴 내용입니다. : ' +
            (!article.CONTENTS ? '' : article.CONTENTS)
          }
        />
      </div>
    </>
  );
};

export default ArticleContents;
