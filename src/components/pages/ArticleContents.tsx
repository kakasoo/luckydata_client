import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import setting from '../../config';
import Span from '../atoms/Span';
import LoadingScreen from '../organisms/LoadingScreen';
import NoData from '../organisms/NoData';
import P from '../atoms/P';

const getKoreanTime = (mysqlDateTime: any) => {
  const koreanTime = new Date(mysqlDateTime);
  return (
    koreanTime.getFullYear() +
    ' / ' +
    (koreanTime.getMonth() - 0 + 1) +
    ' / ' +
    koreanTime.getDate()
  );
};

const ArticlePage = styled.div``;

const ArticleTitle = styled.div`
  margin-left: 10%;

  margin-top: 40px;
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(170, 170, 170);
`;
const ArticleContents = styled.div`
  line-height: 2;
  font-size: 16px;
`;

const MainSection = styled.div`
  display: flex;
`;

const VerticalLeftPage = styled.div`
  margin-left: 10%;
`;
const VerticalRightPage = styled.div`
  width: 30%;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ArticleDetailPage = ({ match }: any): JSX.Element => {
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
          <ArticlePage>
            <ArticleTitle>
              <Span text={article.TITLE as string}></Span>
              <P
                margin="0px"
                fontSize="14px"
                text={getKoreanTime(article.createdAt)}
              ></P>
            </ArticleTitle>
            <MainSection>
              <VerticalLeftPage>
                <ArticleContents>
                  <ReactMarkdown
                    source={!article.CONTENTS ? '' : article.CONTENTS}
                  />
                </ArticleContents>
              </VerticalLeftPage>
              <VerticalRightPage></VerticalRightPage>
            </MainSection>
          </ArticlePage>
        ) : (
          <NoData></NoData>
        )
      ) : (
        <LoadingScreen></LoadingScreen>
      )}
    </>
  );
};

export default ArticleDetailPage;
