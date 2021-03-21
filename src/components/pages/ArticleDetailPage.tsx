/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Span from '../atoms/Span';
import LoadingScreen from '../organisms/LoadingScreen';
import NoData from '../organisms/NoData';
import P from '../atoms/P';
import {
  BlockQuoteBlock,
  CodeBlock,
  InlineCodeBlock,
  LinkBlock,
  TableCellBlock,
  TextBlock,
  ImgBlock,
} from '../molecules/Renderers';
import StickyMemo from '../organisms/StickyMemo';
import { fetchDataHook, getKoreanTime } from '../../utils';
import gfm from 'remark-gfm';

const ArticlePage = styled.div``;

const ArticleTitle = styled.div`
  margin-left: 10%;
  margin-top: 40px;
  font-weight: 700;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(170, 170, 170);
`;

const MainSection = styled.div``;

const ArticleContents = styled.div`
  display: flex;
  width: 100%;
`;

const VerticalLeftPage = styled.div`
  width: 70%;
  font-weight: 300;
  font-size: 16px;
  margin-left: 10%;
  line-height: 2;
  overflow: hidden;
`;

const VerticalRightPage = styled.div`
  height: 100%;
  width: 30%;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ArticleDetailPage = ({ match }: any): JSX.Element => {
  const curArticle = match.params.article_id;
  const article: any = fetchDataHook(`/api/articles/${curArticle}`, 60 * 1000);

  return (
    <>
      {article ? (
        article.ID ? (
          <ArticlePage>
            <ArticleTitle>
              <Span text={article.TITLE as string} fontSize="2.7rem"></Span>
              <P
                margin="0px"
                fontSize="14px"
                fontWeight="300"
                text={getKoreanTime(article.createdAt)}
              ></P>
            </ArticleTitle>
            <MainSection>
              <ArticleContents>
                <VerticalLeftPage>
                  <ReactMarkdown
                    plugins={[gfm]}
                    source={!article.CONTENTS ? '' : article.CONTENTS}
                    skipHtml={false}
                    renderers={{
                      text: TextBlock,
                      link: LinkBlock,
                      code: CodeBlock,
                      tableCell: TableCellBlock,
                      inlineCode: InlineCodeBlock,
                      blockquote: BlockQuoteBlock,
                      image: ImgBlock,
                    }}
                  />
                </VerticalLeftPage>
                <VerticalRightPage>
                  <StickyMemo
                    data={[article].map(({ CONTENTS, ...rest }) => rest)}
                  ></StickyMemo>
                </VerticalRightPage>
              </ArticleContents>
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
