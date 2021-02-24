import React from 'react';
import styled from 'styled-components';
import Span from '../atoms/Span';

const AboutWrapper = styled.div`
  position: relative;
  max-width: 1818px;
  margin-left: auto;
  margin-right: auto;
`;

const AboutBackground = styled.img`
  width: 100%;
`;

const AboutInnerWrapper = styled.div`
  position: absolute;
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  top: 50%;
  transform: translate(0, -30%);
  z-index: 1;
  text-align: center;
`;

const AboutTitle = styled.span`
  font-size: 2.25em;
  font-weight: bold;
`;

const AboutImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const OneImgWrapper = styled.div`
  position: relative;
  margin: 10px 15px;
`;

const AboutImg = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  &:hover {
    opacity: 0.2;
  }
`;

const ImgText = styled.div`
  position: absolute;
  font-size: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const About = (): JSX.Element => {
  return (
    <>
      <AboutWrapper>
        <AboutBackground src="/images/main_about_us_img.png" />
        <AboutInnerWrapper>
          <AboutTitle>ABOUT US</AboutTitle>
          <AboutImgWrapper>
            <OneImgWrapper>
              <AboutImg src="/images/about_us_1.jpg"></AboutImg>
              <ImgText>
                <Span text="스터디"></Span>
              </ImgText>
            </OneImgWrapper>
            <OneImgWrapper>
              <AboutImg src="/images/about_us_2.jpg"></AboutImg>
              <ImgText>
                <Span text="스크럼"></Span>
              </ImgText>
            </OneImgWrapper>
            <OneImgWrapper>
              <AboutImg src="/images/about_us_3.jpg"></AboutImg>
              <ImgText>
                <Span text="세미나"></Span>
              </ImgText>
            </OneImgWrapper>
          </AboutImgWrapper>
        </AboutInnerWrapper>
      </AboutWrapper>
    </>
  );
};

export default About;
