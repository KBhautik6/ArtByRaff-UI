import styled from "styled-components";
import { GlobalStyles } from "../GlobalStyle.styled";

export const StyledSection = styled.section`
  display: block;
  background-color: #161515;
`;

export const StyledHandPaintingWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export const StyledHandPaintingInner = styled.div`
  background: url("https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgHandPainting.jpg")
    no-repeat right center / 100% auto;
  min-height: 682px;
  padding: 0 0 50px;

  @media screen and (max-width: 767px) {
    height: auto;
    background: right center / auto 100% 100% auto;
    margin: 0;
    padding: 45px 0 30px;
  }
`;

export const StyledProductContainer = styled.div`
  margin: 0 auto;
  width: 1185px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 0 -15px;

  @media screen and (max-width: 767px) {
    justify-content: flex-start;
  }
`;

export const StyledHeadingInner = styled.div`
  flex: 0 0 auto;
  max-width: 100%;
  width: auto;
  margin: 0 0 -100px;
`;

export const StyledHeadingTitle = styled.div`
  font-family: "Graphik-Super";
  font-size: 102px;
  line-height: 0.98;
  letter-spacing: 14.23px;
  text-align: right;
  color: #4b4b4b;
  text-transform: uppercase;
  position: relative;

  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 0.93;
    letter-spacing: normal;
    text-align: center;
    right: 0;
    left: 21px;
    z-index: 1;
    top: 27px;
  }
`;

export const StyledHeading = styled.div`
  font-family: "Graphik-Semibold";
  font-size: 88px;
  font-weight: 600;
  line-height: 0.51;
  text-align: right;
  text-transform: uppercase;
  color: #86847bc9;
  position: relative;
  right: 30px;
  bottom: 87px;
  margin: 0 0 40px 0;

  @media screen and (max-width: 767px) {
    font-size: 25px;
    line-height: 0.48;
    letter-spacing: normal;
    text-align: center;
    right: 0;
    top: -30px;
    left: 45px;
  }
`;

export const StyledHomeProducts = styled.div`
  margin: 0;
`;

export const StyledInnerHomeProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const StyledHomeProductGird = styled.div``;

export const StyledHomeProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    margin: 0 0 0 7%;
  }
`;

export const StyledProductList = styled.li`
  border: 1px solid #ffffff;
  width: 25%;
  margin: 64px 6px 64px 0;
  list-style: none;
  min-width: 247px;
  min-height: 362px;
  position: relative;
  transition: opacity 1s ease;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #dddddd;
    transform: translateY(-30px);
  }

  @media screen and (max-width: 767px) {
    margin: 64px auto;
  }
`;

export const StyledProductBox = styled.div`
  text-align: center !important;
`;

export const StyledProductImageWrapper = styled.div`
  position: absolute;
  top: -60px;
  left: -30px;
  z-index: 2;
  width: 247px;
  height: 250px;
`;

export const StyledProductImageLink = styled.a`
  color: #96588a;
  text-decoration: none;
`;

export const StyledProductImage = styled.img`
  width: 247px;
  height: 305px;
`;

export const StyledProductMoreInformation = styled.div`
  text-align: left;
  padding: 22px 20px 22px 25px;
  position: relative;
  margin: 250px 0 0 0;
`;

export const StyledProductName = styled.div`
  margin: 0;
`;

export const StyledProductNameImage = styled.a`
  font-family: "Graphik";
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
`;

export const StyledProductPrice = styled.div`
  font-family: "Graphik-Bold";
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin: 2px 0 9px;
`;

export const StyledProductCategory = styled.div`
  font-family: "Graphik";
  font-size: 13px;
  line-height: 1.15;
  color: #919191;
  text-transform: uppercase;
  width: 80%;
`;

export const StyledProductSize = styled.div`
  margin: 5px 0 0 0;
  color: #919191;
`;

export const StyledAddtoBtn = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  border: 1px solid #d8cf91;
  padding: 5px 8.2px 6px;

  &:hover {
    background: #d8cf91;
  }
`;
