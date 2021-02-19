import React from 'react';
import styled from 'styled-components';

const StyledBannerBackground = styled.div`
    position: relative;
    width: 100%;
    max-height: 895px;
    overflow: hidden;
`;

const StyledBannerImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
`;

const StyledBannerWrapper = styled.div`
    position: absolute;
    z-index: 1;
    width: 414px;
    height: 139px;
    top: 10%;
    left: 18%;
`;

const StyledBannerLogo = styled.div`
    width: 414px;
    height: 93px;
    background-image: url("/images/main_luckydata.png");
    margin-bottom: 64px;
`;

const StyledBannerDecoration = styled.div`
    width: 2px;
    height: 86px;
    float: left;
    background: linear-gradient(to top, #3fbbfe, #a541ff);
    margin-right: 18px;
`;

const StyledBannerText = styled.div`
    color: white;
    width: 317px;
    height: 72px;
    text-size: 16pt;
    line-height: 21pt;
`;

const Banner = (): JSX.Element => {
    return (
        <StyledBannerBackground>
            <StyledBannerImg src="/images/main_img.jpg"></StyledBannerImg>
            <StyledBannerWrapper>
                <StyledBannerLogo></StyledBannerLogo>
                <StyledBannerDecoration></StyledBannerDecoration>
                <StyledBannerText>
                    운수대통에서 비롯된 말로<br/>
                    '대'를 데이터의 '데'로 바꾼 말입니다.<br/>
                    운수 좋은 데이터 분석이 되시기 바랍니다.
                </StyledBannerText>
            </StyledBannerWrapper>
        </StyledBannerBackground>
    );
};

export default Banner;
