import React from 'react';
import styled from 'styled-components';
import P from '../atoms/P';
import { getKoreanTime } from '../../utils';

const StyledNoData = styled.div`
  border-left: 3px solid rgb(220, 220, 220);
  padding-left: 14px;
  margin-left: 14px;
  font-size: 19px;
  line-height: 0.8;
  font-family: InkLipquid;

  height: fit-content;
  position: fixed;
`;

const StickyMemo = (props: any): JSX.Element => {
  const [data] = props.data;

  return (
    <StyledNoData>
      <P text={`게시글 제목 : ${data.TITLE}`}></P>
      <P text={`게시글 번호 : ${data.ID}`}></P>
      <P text={`게시글 최초 작성일 : ${getKoreanTime(data.createdAt)}`}></P>
      <P text={`게시글 최종 수정일 : ${getKoreanTime(data.updatedAt)}`}></P>
      <P text={`게시글 작성자 : ${data.ADMIN_ID}`}></P>
    </StyledNoData>
  );
};

export default StickyMemo;
