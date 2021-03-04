import * as React from 'react';
import Img from '../atoms/Img';
import Div from '../atoms/StyledDiv';
import FooterCenterDecoration from '../molecules/FooterCenterDecoration';
import FooterCenterTextWrapper from '../molecules/FooterCenterTextWrapper';
import FooterCenterWrapper from '../molecules/FooterCenterWrapper';
import FooterWrapper from '../molecules/FooterWrapper';

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <FooterCenterWrapper>
        <FooterCenterDecoration></FooterCenterDecoration>
        <FooterCenterTextWrapper>
          <Div
            color="#666666"
            fontSize="10pt"
            lineHeight="15pt"
            marginRight="10px"
          >
            동아리 문의 및 지원 이메일
          </Div>
          <Div
            color="#666666"
            fontSize="10pt"
            lineHeight="15pt"
            marginRight="10px"
          >
            leeshble@gmail.com
          </Div>
          <Div
            color="#666666"
            fontSize="12pt"
            lineHeight="15pt"
            marginRight="10px"
          >
            운수데통 동아리
          </Div>
          <Div color="#666666" font-size="10pt" line-height="15pt">
            010-2610-9480 회장 이상현
          </Div>
        </FooterCenterTextWrapper>
        <Img
          height="auto"
          display="block"
          width="auto"
          marginRight="auto"
          marginLeft="auto"
          marginTop="30px"
          src="/images/logo_gray.png"
          alt="logo"
        ></Img>
      </FooterCenterWrapper>
    </FooterWrapper>
  );
};

export default Footer;
