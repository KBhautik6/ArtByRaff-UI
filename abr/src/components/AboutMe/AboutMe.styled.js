import styled from "styled-components";
import { GlobalStyles } from "../GlobalStyle.styled";

export const StyledSection = styled.div`
  background-color: #161515;
  width: 100%;
  max-width: 1128px;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: 1200px) {
    max-width: 1140px;
    width: 100%;
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    max-width: 960px;
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    max-width: 720px;
    width: 100%;
  }

  @media screen and (max-width: 576px) {
    max-width: 540px;
    width: 100%;
  }
`;

export const StyledWrapper = styled.div``;

export const StyledInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const StyledLeftAboutMe = styled.div`
  @media screen and (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const StyledAboutMeImage = styled.img`
  height: auto;
  max-width: 100%;
  display: block;
`;

export const StyledRightAboutMe = styled.div`
  @media screen and (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const StyledHeading = styled.div`
  font-family: "Graphik-Bold";
  font-size: 36px;
  font-weight: bold;
  line-height: 2.25;
  text-align: left;
  text-transform: uppercase;
  color: #ffffff;

  @media screen and (max-width: 767px) {
    font-size: 25px;
    text-align: center;
    margin: 44px 0 0 0;
  }
`;

export const StyledAboutMeDescription = styled.div`
  font-family: "Graphik-Light";
  font-size: 16px;
  font-weight: 300;
  line-height: 1.94;
  text-align: left;
  color: #d8d8d8;
  max-width: 471px;
  width: 100%;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    text-align: center;
    line-height: 2.21;
    margin: 10px 0 0 0;
  }
`;

export const StyledSignatureWrapper = styled.div`
  display: flex;
  margin: 25px 0 0 0;

  @media screen and (max-width: 767px) {
    margin: 10px 0 0 0;
  }
`;

export const StyledSignature = styled.div`
  font-family: "Graphik";
  font-size: 16px;
  line-height: 5.06;
  text-align: left;
  margin: 0 22px 0 0;
  text-transform: uppercase;
  color: #ffffff;
`;

export const StyledSignatureImage = styled.img`
  height: auto;
  max-width: 100%;
  display: block;

  @media screen and (max-width: 767px) {
    max-width: 92px;
    width: 100%;
  }
`;
