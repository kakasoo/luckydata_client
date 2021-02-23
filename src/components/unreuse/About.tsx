import React from 'react';
import styled from 'styled-components';

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

const AboutImg = styled.img`
  width: 20%;
  float: left;
  margin: 10px 15px;
  border-radius: 10px;
  object-fit: cover;
`;

const About = (): JSX.Element => {
  return (
    <>
      <AboutWrapper>
        <AboutBackground src="/images/main_about_us_img.png" />
        <AboutInnerWrapper>
          <AboutTitle>ABOUT US</AboutTitle>
          <AboutImgWrapper>
            <AboutImg src="/images/about_us_1.jpg"></AboutImg>
            <AboutImg src="/images/about_us_2.jpg"></AboutImg>
            <AboutImg src="/images/about_us_3.jpg"></AboutImg>
          </AboutImgWrapper>
        </AboutInnerWrapper>
      </AboutWrapper>
    </>
  );
};

export default About;
