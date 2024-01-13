import styled, { css } from "styled-components";
import { GlobalStyles } from "../GlobalStyle.styled";

export const StyledCommonInput = css`
  background: transparent;
  padding: 0;
  border: none;
  border-bottom: 1px solid #d8cf91;
  position: relative;
  bottom: 10px;
  font-size: 20px;
  line-height: 1.8;
  text-align: center;
  text-transform: uppercase;
  color: #979797;
  margin: 35px 0 0 0;

  &:focus {
    outline: none;
    border-bottom: 2px solid #d8cf91;
  }
`;

export const StyledCommonFooter = css`
  font-family: "Graphik-Light";
  font-size: 18px;
  font-weight: 300;
  line-height: 2;
  text-align: left;
  color: #d5d5d5;
  margin: 0 34px 0 0;
`;

export const StyledWrapper = styled.div`
  background: url(https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgContactform.jpg)
    no-repeat;
  min-height: 1100px;
  height: 100%;
  background-position: center center;
  background-color: #161515;
  background-size: 100% auto;
  padding: 60px 0 0;

  @media screen and (max-width: 767px) {
    background: url(https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgContactform.jpg)
      no-repeat;
    height: auto;
    background-position: bottom right;
    background-size: contain;
    padding: 0;
  }
`;

export const StyledContactWrapper = styled.div`
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    max-width: 1140px;
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    max-width: 960px;
    width: 100%;
  }

  @media screen and (min-width: 576px) and(max-width: 767px) {
    max-width: 720px;
    width: 100%;
  }

  @media screen and (max-width: 575px) {
    max-width: 540px;
    width: 100%;
  }
`;

export const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledTitle = styled.div`
  font-family: "Graphik-Black";
  font-size: 83px;
  font-weight: 900;
  line-height: 0.54;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  top: 110px;
  color: #1c1b1c;

  @media screen and (max-width: 767px) {
    font-size: 39px;
    line-height: 1.43;
  }
`;

export const StyledHeading = styled.div`
  font-family: "Graphik-Black";
  font-size: 48px;
  font-weight: 900;
  line-height: 1.71;
  text-align: center;
  text-transform: uppercase;
  z-index: 1;
  color: #e8e3e8;

  @media screen and (max-width: 767px) {
    font-size: 17px;
    line-height: 1.43;
  }
`;

export const StyledContactFormWrapper = styled.div`
  max-width: 990px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 0 5px;
  }
`;

export const StyledContactFormInner = styled.div`
  margin: 0;
`;

export const StyledContactForm = styled.form`
  margin: 0 0 1.618rem 0;
`;

export const StyledContactData = styled.div`
  max-width: 990px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 0 5px;
  }
`;

export const StyledFormTitle = styled.p`
  font-family: "Graphik-Light";
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  color: #a2a2a2;
  margin: 30px 0 70px;
`;

export const StyledTextWrapper = styled.p`
  margin: 0;
`;

export const StyledText = styled.span`
  font-family: "Graphik-Light";
  font-size: 26px;
  line-height: 2.5;
  text-align: center;
  color: #e8e3e8;
  margin: 0 7px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const StyledFormControl = styled.span`
  position: relative;
`;

export const StyledInputText = styled.input`
  width: 500px;
  font-family: "Graphik-Light";
  ${StyledCommonInput};

  @media screen and (max-width: 767px) {
    width: 50%;
    font-size: 14px;
  }
`;

export const StyledInputTelephone = styled.input`
  width: 360px;
  font-family: "Graphik-Light";
  ${StyledCommonInput};

  @media screen and (max-width: 767px) {
    width: 50%;
    font-size: 14px;
  }
`;

export const StyledInputEmail = styled.input`
  width: 370px;
  font-family: "Graphik-Light";
  ${StyledCommonInput};

  @media screen and (max-width: 767px) {
    width: 50%;
    font-size: 14px;
  }
`;

export const StyledInputElse = styled.input`
  width: 100%;
  ${StyledCommonInput};
  text-align: left;

  @media screen and (max-width: 767px) {
    width: 90%;
    font-size: 10px;
  }
`;

export const StyledCheckBoxInner = styled.div`
  text-align: left;
  margin: 0 0 60px 0;
`;

export const StyledTextInnerWrapper = styled.div`
  position: relative;
  display: inline;
`;

export const StyledInputCheckBox = styled.input``;

export const StyledCheckBoxText = styled.span`
  font-family: "Graphik-light";
  font-size: 26px;
  line-height: 2.5;
  text-align: center;
  color: #e8e3e8;
  margin: 0 2px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
    margin: 10px 2px;
  }
`;

export const StyledInputBtn = styled.button`
  float: right;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 15px;
  margin: -50px 0 0;
  padding: 18px 45px;
  text-transform: uppercase;
  cursor: pointer;

  &::hover {
    border: 1px solid #7e7555;
  }

  @media screen and (max-width: 767px) {
    padding: 13px 35px;
    margin: 20px 80px 0 0;
  }
`;

export const StyledSendBtnWrapper = styled.div``;

export const StyledFooterSection = styled.div`
  margin: 0;
`;

export const StyledFooterWrapper = styled.div`
  margin: 0;
`;

export const StyledFooterInner = styled.div`
  width: 100%;
`;
export const StyledFooterContainer = styled.div`
  max-width: 1128px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    max-width: 1140px;
    width: 100%;
  }

  @media screen and (min-width: 767px) and (max-width: 992px) {
    max-width: 960px;
    width: 100%;
  }

  @media screen and (min-width: 577px) and (max-width: 768px) {
    max-width: 720px;
    width: 100%;
  }

  @media (max-width: 576px) {
    max-width: 540px;
    width: 100%;
  }
`;

export const StyledFooterMain = styled.div`
  padding: 93px 0 63px;
  border-bottom: 1px solid #6d6d6d;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;
