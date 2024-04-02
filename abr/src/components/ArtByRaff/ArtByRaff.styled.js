import styled, { css } from "styled-components";
import { GlobalStyles } from "../GlobalStyle.styled";

export const StyledCommonFlex = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const StyledSection = styled.section`
  background: url("https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgIntroduction.jpg")
    no-repeat;
  height: 682px;
  background-position: center center;
  background-size: 100% auto;
  margin: 110px 0 0;
  transition: 0.4s ease-in-out;

  @media screen and (max-width: 767px) {
    height: auto;
    background-position: center center;
    background-size: contain;
    margin: 0;
    padding: 45px 0 30px;
    background-size: auto 100%;
  }
`;

export const StyledWrapper = styled.div`
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    max-width: 1140px;
    width: 100%;
  }

  @media screen and (max-width: 992px) and (min-width: 768px) {
    max-width: 960px;
    width: 100%;
  }

  @media screen and (min-width: 576px) and (max-width: 767px) {
    max-width: 720px;
    width: 100%;
  }

  @media screen and (max-width: 575px) {
    max-width: 540px;
    width: 100%;
  }
`;

export const StyledHeadingWrapper = styled.div`
  ${StyledCommonFlex}
`;

export const StyledHeadingWelcome = styled.div`
  font-family: "Graphik-Semibold";
  font-size: 88px;
  font-weight: 600;
  line-height: 0.51;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  left: 17px;
  top: 12px;
  color: #1c1b1c;

  @media screen and (max-width: 767px) {
    font-size: 25px;
    font-weight: 600;
    line-height: 0.52;
    left: 45px;
    top: 5px;
  }
`;

export const StyledHeadingABR = styled.div`
  font-family: Graphik-Super;
  font-size: 102px;
  line-height: 0.98;
  letter-spacing: 14.38px;
  color: #4b4b4b;
  text-transform: uppercase;
  margin: 0;
  position: relative;
  left: -60px;
  top: -100px;

  @media screen and (max-width: 767px) {
    font-size: 21px;
    line-height: 0.96;
    letter-spacing: 8px;
    margin: 0 0 100px 0;
    margin: 0 0 0 100px;
    top: -25px;
  }
`;

export const StyledText = styled.div`
  ${StyledCommonFlex}
`;

export const StyledDescriptionWrapper = styled.div`
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

export const StyledDescription = styled.div`
  margin: 80px 0 0;
  border-left: 5px solid #d8cf91;
  padding: 0 67px;
  max-width: 967px;
  width: 100%;
  font-family: "Graphik-Light";
  font-size: 22px;
  font-weight: 300;
  line-height: 1.77;
  text-align: left;
  color: #d8d8d8;

  @media screen and (max-width: 767px) {
    margin: 25px 0 0 0;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.93;
    padding: 0 0 0 25px;
    border-left: 5px solid #d8cf91;
  }
`;
