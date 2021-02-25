import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import ReactMarkdown from 'react-markdown';
import setting from '../../config';
import Span from '../atoms/Span';
import LoadingScreen from '../organisms/LoadingScreen';
import NoData from '../organisms/NoData';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ArticleContents = ({ match }: any): JSX.Element => {
  const curArticle = match.params.article_id;
  const [article, setArticle] = useState<any | null>(null);
  useEffect(() => {
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

    getArticle();
  }, []);

  return (
    <>
      {article ? (
        article.ID ? (
          <>
            <div id="markdown_title" style={{ paddingLeft: '15%' }}>
              <Span fontSize="48px" text={article.TITLE as string}></Span>
            </div>
            <div
              id="markdown_contents"
              style={{ paddingLeft: '15%', paddingRight: '15%' }}
            >
              <ReactMarkdown
                source={!article.CONTENTS ? '' : article.CONTENTS}
              />
            </div>
          </>
        ) : (
          <NoData></NoData>
        )
      ) : (
        <LoadingScreen></LoadingScreen>
      )}
    </>
  );
};

export default ArticleContents;
