import styled, { css } from "styled-components";

export const StyledCommonInput = css`
  background: transparent;
  padding: 0;
  border-bottom: 1px solid #d8cf91;
  position: relative;
  bottom: 10px;
  font-size: 20px;
  line-height: 1.8;
  text-align: center;
  text-transform: uppercase;
  color: #979797;
  margin-top: 35px;
`;

export const StyledCommonFooter = css`
  font-family: Graphik-Light;
  font-size: 18px;
  font-weight: 300;
  line-height: 2;
  text-align: left;
  color: #d5d5d5;
  margin-right: 34px;
`;

export const StyledWrapper = styled.div`
  background: url(../images/bgContactform.jpg) no-repeat;
  min-height: 1100px;
  height: 100%;
  background-position: center center;
  background-size: 100% auto;
  padding: 60px 0 0;

  @media screen and (max-width: 767px) {
    background: url(../images/bgContactform.jpg) no-repeat;
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
  @media screen and (min-width: 992px) {
    max-width: 960px;
    width: 100%;
  }
  @media (min-width: 768px) {
    max-width: 720px;
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    max-width: 540px;
    width: 100%;
  }
`;

export const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTitle = styled.div`
  font-family: Graphik-Black;
  font-size: 83px;
  font-weight: 900;
  line-height: 0.54;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  top: 40px;
  color: #1c1b1c;
`;

export const StyledHeading = styled.div`
  font-family: Graphik-Black;
  font-size: 48px;
  font-weight: 900;
  line-height: 1.71;
  text-align: center;
  text-transform: uppercase;
  z-index: 1;
  color: #e8e3e8;
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
  margin-bottom: 1.618em;
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
  font-family: Graphik-Light;
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
  font-family: Graphik;
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
  ${StyledCommonInput};
`;

export const StyledInputTelephone = styled.input`
  width: 360px;
  ${StyledCommonInput};
`;

export const StyledInputEmail = styled.input`
  width: 370px;
  ${StyledCommonInput};
`;

export const StyledInputElse = styled.input`
  width: 100%;
  text-align: left;
  ${StyledCommonInput};
`;

export const StyledFooterSection = styled.div`
  margin: 0px;
`;
export const StyledFooterWrapper = styled.div`
  margin: 0;
`;
export const StyledFooterInner = styled.div`
  width: 100%;
`;
export const StyledFooterContainer = styled.div`
  width: 100%;
  max-width: 1128px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
  @media screen and (min-width: 767px) and (max-width: 992px) {
    max-width: 960px;
  }
  @media screen and (min-width: 577px) and (min-width: 768px) {
    max-width: 720px;
  }
  @media (max-width: 576px) {
    max-width: 540px;
  }
`;

export const StyledFooterMain = styled.div`
  padding: 93px 0 63px;
  border-bottom: 1px solid #6d6d6d;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const StyledFooterLeft = styled.div`
  @media screen and (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const StyledFooterBox = styled.div`
  margin: 0;
`;

export const StyledFooterLogo = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 15px;
`;

export const StyledFooterLink = styled.a`
  color: #96588a;
`;

export const StyledFooterImage = styled.img`
  max-width: 190px;
  height: auto;
  display: block;
`;

export const StyledFooterText = styled.div`
  margin: 0;
`;

export const StyledFooterMenu = styled.ul`
  display: flex;
`;

export const StyledFooterList = styled.li`
  list-style: none;
`;

export const StyledFooterListLink = styled.a`
  ${StyledCommonFooter};
`;

export const StyledFooterListLinkImprint = styled.a`
  ${StyledCommonFooter};
  margin-right: 0px;
`;

export const StyledFooterHead = styled.h4`
  font-family: Graphik-Medium;
  font-size: 29px;
  font-weight: 500;
  line-height: 1.83;
  margin: 40px 0 0;
  text-align: left;
  text-transform: capitalize;
  color: #ffffff;
`;

export const StyledEmailFormWrapper = styled.div`
  margin-bottom: 0;
`;

export const StyledEmailForm = styled.div`
  height: 50px;
  background-color: transparent;
  color: #ffffff;
  position: relative;
  margin: 0;
  border-bottom: 1px solid #fff;
`;

export const StyledYourEmail = styled.input`
  font-family: Graphik-Light;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.56;
  text-align: left;
  color: #f1f1f1;
`;

export const StyledYourEmailSubmit = styled.input`
  padding: 0;
  background-image: url(https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/newsletter-aero.svg);
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 50px;
  background-color: transparent;
`;

export const StyledFooterRight = styled.div`
  @media screen and (max-width: 767px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const StyledRightBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StyledContactinfo = styled.div`
  font-family: Graphik-Light;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.5;
  text-align: right;
  margin-top: 50px;
  color: #d5d5d5;
`;

export const StyledFooterDescription = styled.div`
  margin: 0;
`;

export const StyledContactEmailinfo = styled.div`
  margin: 0;
`;

export const StyledEmailLink = styled.a`
  color: #b2b2b2;
`;

export const StyledSocialMedia = styled.div`
  display: inline-block;
  vertical-align: bottom;
`;

export const StyledSocialMediaMenu = styled.ul`
  display: flex;
`;

export const StyleSocialMediaList = styled.li`
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  padding: 0 5px;
`;

export const StyledFacebookLink = styled.a`
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  width: 40px;
  line-height: 40px;
`;

export const StyledInstagramLink = styled.a`
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  width: 40px;
  line-height: 40px;
`;

export const StyledCopywriteWrapper=styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    background-color: transparent;
    padding: 14px 0;
`

export const StyledCopywritecontainer=styled.div`
    width: 100%;
    max-width: 1128px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 1200px) {
    max-width: 1140px;
}
@media screen and (min-width:767px)and (max-width: 992px){
    max-width: 960px;
}
@media screen and (min-width:576px) and  (max-width: 768px){
    max-width: 720px;
}
@media screen and (max-width: 576px){
    max-width: 540px;
}
`

export const StyleCopywriteInner=styled.div`
    align-items: center!important;
    justify-content: space-between!important;display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

export const StyleYearWrapper=styled.div`
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
`

export const StyledYear =styled.p`
font-family: Graphik-Light;
    font-size: 16px;
    font-weight: 300;
    line-height: 2.56;
    text-align: left;
    color: #d5d5d5;
`


export const StyledABRLink=styled.a`
    font-family: Graphik-Light;
    font-size: 16px;
    font-weight: 300;
    line-height: 2.56;
    text-align: left;
    color: #d5d5d5; 
`

export const StyledFootCopy=styled.div`
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
`

export const StyledDesignAndDevelopment=styled.div`
    font-family: Graphik-Light;
    font-size: 16px;
    font-weight: 300;
    line-height: 2.56;
    text-align: left;
    color: #d5d5d5;
`

export const StyledHeartIcon=styled.span`
margin:0;
`


export const StyledDesignAndDevelopmentLink=styled.a`
font-family: Graphik-Light;
    font-size: 16px;
    font-weight: 300;
    line-height: 2.56;
    text-align: left;
    color: #d5d5d5;
`

