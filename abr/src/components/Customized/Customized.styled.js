import styled from "styled-components";

export const StyledSection = styled.div``;

export const StyledContainer = styled.div`
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledHeadingWrapper = styled.div`
  text-align: center !important;
`;

export const StyledHeading = styled.h3`
  font-family: "Graphik-Super";
  font-size: 84px;
  line-height: 1.58;
  letter-spacing: 9.88px;
  text-align: center;
  color: #4b4b4b;
  text-transform: uppercase;
  margin: 0 0 -30px 0;

  @media screen and (max-width: 992px) {
    font-size: 36px;
  }
`;

export const StyledNextArrow = styled.div`
  &.slick-arrow {
    margin: 55px 0;
    height: 44px;
    max-width: 53px;
    width: 100%;
    display: block;
    position: relative;
    right: -661px;
    top: -411px;
    background: #2d2b2b;
    border-radius: 25px;

    &:before {
      position: absolute;
      top: 13px;
      right: 18px;
    }
  }
`;

export const StyledPreviousArrow = styled.div`
  &.slick-arrow {
    margin: 55px 0;
    position: relative;
    left: 593px;
    top: 700px;
    background: #2d2b2b;
    height: 44px;
    max-width: 53px;
    width: 100%;
    display: flex;
    border-radius: 25px;
    cursor: pointer;

    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const ArrowContainer = styled.div`
  &.slick-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    transform: translateX(-50%);
    background: #2d2b2b;
    height: 44px;
    width: 53px;
    border-radius: 25px;
  }
`;

export const StyledCustomSlider = styled.div`
  height: max-content;
  text-align: center;
  border-radius: 10px;
`;

export const CustomArrowIcon = styled.svg`
  fill: #ffffff;
`;

export const StyledSlider = styled.div`
  display: flex;
`;

export const StyledSliderWrapper = styled.div`
  border-radius: 10px 10px 0 0;
`;

export const StyledSliderImageInner = styled.div`
  margin: 20px -14px 9px 0;
  position: relative;
`;

export const StyledSliderImage = styled.img`
  width: 330px;
  height: 420px;

  @media screen and (max-width: 991px) {
    margin: 20px -24px 9px 0;
    max-width: 100px;
    width: 100%;
    max-height: 200px;
  }
`;

export const StyledSliderNameWrapper = styled.div`
  text-align: center;
  padding: 10px;
  margin: 10px 0 0;
`;

export const StyledSliderName = styled.p`
  font-family: "Graphik-Super";
  font-size: 24px;
  font-weight: bold;
  color: #d8cf91;
  margin: 0;
`;
