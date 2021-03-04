import * as React from 'react';
import styled from 'styled-components';
import FooterCenterWrapper from './FooterCenterWrapper';
import FooterWrapper from './FooterWrapper';

const FooterCenterDecoration = styled.div`
  width: 86px;
  height: 3px;
  background: linear-gradient(to right, #3fbbfe, #a541ff);
  margin-bottom: 9px;
`;

const FooterCenterTextWrapper = styled.div`
  display: flex;
`;

const FooterCenterText1 = styled.div`
  color: #666666;
  font-size: 10pt;
  line-height: 15pt;
  margin-right: 10px;
`;

const FooterCenterText2 = styled.div`
  color: #666666;
  font-size: 12pt;
  line-height: 15pt;
  margin-right: 10px;
`;

const FooterCenterText3 = styled.div`
  color: #666666;
  font-size: 10pt;
  line-height: 15pt;
`;

const FooterCenterLogo = styled.img`
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
`;

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <FooterCenterWrapper>
        <FooterCenterDecoration>
          <FooterCenterTextWrapper>
            <FooterCenterText1>동아리 문의 및 지원 이메일</FooterCenterText1>
            <FooterCenterText1>leeshble@gmail.com</FooterCenterText1>
            <FooterCenterText2>운수데통 동아리</FooterCenterText2>
            <FooterCenterText3>010-2610-9480 회장 이상현</FooterCenterText3>
          </FooterCenterTextWrapper>
          <FooterCenterLogo
            src="/images/logo_gray.png"
            alt="logo"
          ></FooterCenterLogo>
        </FooterCenterDecoration>
      </FooterCenterWrapper>
    </FooterWrapper>
  );
};

export default Footer;
