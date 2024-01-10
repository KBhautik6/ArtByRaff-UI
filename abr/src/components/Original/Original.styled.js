import styled from "styled-components";

export const StyledSection = styled.section`
  display: block;
  background-color: #161515;
`;

export const StyledHandPaintingWrapper = styled.div`
  margin: 0;
`;

export const StyledHandPaintingInner = styled.div`
  background: url(https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgHandPainting.jpg)
    no-repeat;
  min-height: 682px;
  background-position: right center;
  background-size: 100% auto;
  padding: 0 0 50px;

  @media screen and (max-width: 767px) {
    height: auto;
    background-position: right center;
    background-size: auto 100%;
    margin: 0;
    padding: 45px 0 30px;
    background-size: 100% auto;
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
  width: auto;
  max-width: 100%;
`;

export const StyledHeadingTitle = styled.div`
  font-family: Graphik-Super;
  font-size: 102px;
  line-height: 0.98;
  letter-spacing: 19.38px;
  text-align: right;
  color: #4b4b4b;
  text-transform: uppercase;
  position: relative;
  right: -64px;

  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 0.93;
    letter-spacing: normal;
    text-align: center;
    right: 0;
    left: 21px;
    z-index: 1;
  }
`;

export const StyledHeading = styled.div`
  font-family: Graphik-Semibold;
  font-size: 88px;
  font-weight: 600;
  line-height: 0.51;
  text-align: right;
  text-transform: uppercase;
  color: #86847bc9;
  position: relative;
  right: 30px;
  margin-bottom: 40px;

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

export const StyledHomeProductGird = styled.div`
  margin: 0;
  padding: 0;
`;

export const StyledHomeProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    margin-left: 7%;
  }
`;

export const StyledProductList = styled.li`
  border: 1px solid #ffffff;
  width: 25%; /* Set width to 25% to display 4 products in a row */
  margin: 64px 6px 64px 0; /* Adjust margins as needed */

  min-width: 247px;
  min-height: 362px;
  position: relative;
  transition: opacity 1s ease;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #ddd;
    transform: translateY(-30px); /* Adjust the value as needed */
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
  min-height: 250px;
  max-height: 250px;
  max-width: 247px;
  min-width: 247px;
`;

export const StyledProductImageLink = styled.a`
  color: #96588a;
  text-decoration: none;
`;

export const StyledProductImage = styled.img`
  min-height: 305px;
  max-height: 305px;
  max-width: 247px;
  min-width: 247px;
`;

export const StyledProductMoreInformation = styled.div`
  text-align: left;
  padding: 22px 20px 22px 25px;
  position: relative;
  margin-top: 250px;
`;

export const StyledProductName = styled.div`
  margin: 0;
`;

export const StyledProductNameImage = styled.a`
  font-family: Graphik;
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
`;

export const StyledProductPrice = styled.div`
  font-family: Graphik-Bold;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin: 2px 0 9px;
`;

export const StyledProductCategory = styled.div`
  font-family: Graphik;
  font-size: 13px;
  line-height: 1.15;
  color: #919191;
  text-transform: uppercase;
  width: 80%;
`;

export const StyledProductSize = styled.div`
  margin-top: 5px;
  color: #919191;
`;
