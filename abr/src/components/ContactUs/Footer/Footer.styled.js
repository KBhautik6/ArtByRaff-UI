import styled from "styled-components";
import { GlobalStyles } from "../../GlobalStyle.styled";
import { FaHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const StyledSection = styled.div``;

export const StyledFooterWrapper = styled.div`
  width: 100%;
`;

export const StyledFooterContainer = styled.div`
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledFooterDivide = styled.div`
  padding: 4px 0 63px;
  border-bottom: 1px solid #6d6d6d;

  @media screen and (max-width: 991px) {
    padding: 9px 0 122px 162px;
    line-height: 1;
    word-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledFooterLeft = styled.div`
  @media screen and (min-width: 767px) {
    flex: 0 0 50%;
    max-width: 50%;
    width: 100%;
  }
`;

export const StyledFooterBox = styled.div``;

export const StyledFooterLogoWrapper = styled.a`
  display: inline-block;
  vertical-align: middle;
  margin: 0 356px 0 0;

  img {
    margin: 0;
    max-width: 190px;
    width: 100%;
  }
`;

export const StyledFooterLinksWrapper = styled.div`
  box-sizing: border-box;
`;

export const StyledFooterLink = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    margin: 0 0 0 19px;
  }
`;

export const StyledFooterText = styled.p`
  font-family: "Graphik-Light";
  font-size: 18px;
  font-weight: 300;
  line-height: 2;
  text-align: left;
  color: #d5d5d5;
  margin: 0 28px 0 0;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    margin: 0 27px 0 0;
  }
`;

export const StyledFooterInfo = styled.div`
  font-family: "Graphik-Light";
  font-size: 16px;
  font-weight: 300;
  line-height: 2.5;
  text-align: left;
  margin: 5px 0 0 20px;
  color: #d5d5d5;
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export const StyledFooterName = styled.div``;

export const StyledFooterEmailPart = styled.div``;

export const StyledSubcribe = styled.div`
  font-family: "Graphik-Medium";
  font-size: 29px;
  font-weight: 500;
  line-height: 1.83;
  text-align: left;
  text-transform: capitalize;
  margin: 40px 0 0;
  color: #ffffff;

  @media screen and (max-width: 767px) {
    font-family: "Graphik-Medium";
    font-size: 22px;
    font-weight: 500;
    line-height: 1.83;
    margin: 0 0 0 19px;
  }
`;

export const StyledFooterEmailWrapper = styled.div`
  height: 50px;
  background: transparent;
  color: #000;
  position: relative;
  margin: 0;
  border-bottom: 1px solid #fff;

  @media screen and (max-width: 767px) {
    margin: 0 0 0 19px;
  }
`;

export const StyledFooterEmail = styled.input`
  font-family: "Graphik-Light";
  background: transparent;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.56;
  text-align: left;
  color: #6f6f6f;
  border: transparent;

  &:focus {
    outline: none;
    border: transparent;
  }
`;

export const StyledSubmitBtn = styled.div`
  padding: 0;
  background-image: url("https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/newsletter-aero.svg");
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  top: 0;
  max-width: 30px;
  width: 100%;
  height: 50px;
`;

export const StyledFooterRight = styled.div`
  @media screen and (min-width: 767px) {
    flex: 0 0 50%;
    max-width: 50%;
    width: 100%;
  }
`;

export const StyledFooterRightBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin: -200px 0 0 1020px;
`;

export const StyledFooterRightBoxWrapper = styled.div`
  font-family: "Graphik-Light";
  font-size: 16px;
  font-weight: 300;
  text-align: right;
  margin: 49px 24px 0 0;
  color: #d5d5d5;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const StyledFooterDescription = styled.div``;

export const StyledFooterDescriptionEmail = styled.p`
  max-width: 300px;
  width: 100%;
  max-height: 120px;
  white-space: nowrap;
`;

export const StyledIconContainer = styled.div`
  display: flex;
  margin: -10px 19px 0 0;

  @media screen and (max-width: 992px) {
    align-items: flex-start;
    margin: 30px 0 0;
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 60px 0 0;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const FacebookIcon = styled(FaFacebook)`
  width: 30px;
  height: 30px;
  color: #fff;
`;

export const InstagramIcon = styled(FaInstagram)`
  width: 30px;
  height: 30px;
  color: #e4405f;
`;

export const StyledCopyWriteSection = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 14px 0;

  @media screen and (max-width: 992px) {
    padding: 45px 0;
  }
`;

export const StyledCopyWriteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const StyledCopyWriteTextWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex: 0 0 auto;
    max-width: 100%;
    width: auto;
  }
`;

export const StyledCopyWriteText = styled.p`
  font-family: Graphik-Light;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.56;
  text-align: left;
  color: #d5d5d5;

  @media screen and (max-width: 767px) {
    line-height: 1;
    margin: auto;
  }
`;

export const StyledDesignDeveloperText = styled.p`
  font-family: Graphik-Light;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.56;
  text-align: left;
  color: #d5d5d5;

  @media screen and (max-width: 767px) {
    line-height: 1;
  }
`;

export const HeartIcon = styled(FaHeart)`
  color: #ff0000;
  margin: 0 5px 0 0;
  width: 16px;
  height: 16px;
`;
