import styled from "styled-components";
import { GlobalStyles } from "../GlobalStyle.styled";

export const StyledSection = styled.section`
  margin: 0;
  padding: 0;
  background-position: center;
  background-size: 100% auto;
`;

export const StyledWrapper = styled.div`
  background: url("https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgPrintArt.jpg")
    no-repeat;
  background-position: center;
  background-size: 100% auto;
  background-color: #161515;
`;

export const StyledInnerWrapper = styled.div`
  margin: 0 auto;
  width: 1185px;
`;

export const StyledHeadingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const StyledTitle = styled.div`
  font-family: "Graphik-Semibold";
  font-size: 88px;
  font-weight: 600;
  line-height: 0.51;
  text-align: left;
  text-transform: uppercase;
  color: #1c1b1c;
  position: relative;
  left: -18px;
  top: 94px;
  width: 100%;

  @media screen and (max-width: 767px) {
    font-size: 25px;
    font-weight: 600;
    line-height: 0.48;
    left: 42px;
    top: 5px;
  }
`;

export const StyledHeading = styled.div`
  font-family: "Graphik-Super";
  font-size: 102px;
  line-height: 0.98;
  letter-spacing: 19.38px;
  text-align: left;
  text-transform: uppercase;
  margin: 0 0 10px 0;
  padding: 0 0 0 21px;
  color: #4b4b4b;
  z-index: 1;

  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 0.93;
    letter-spacing: 5.32px;
    position: relative;
    left: 20px;
    margin: 0 0 40px;
  }
`;

export const StyledViewMore = styled.div``;

export const StyledBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledBtn = styled.div`
  border: 1px solid #ffffff;
  border-radius: 30px;
  padding: 15px 30px;
  width: 200px;
  color: #ffffff;
  cursor: pointer;
`;

export const StyledProductSculphturesList = styled.li`
  border: 1px solid #ffffff;
  list-style: none;
  width: 40%;
  margin: 64px 55px 64px 0;
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

export const StyledHomeProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;
