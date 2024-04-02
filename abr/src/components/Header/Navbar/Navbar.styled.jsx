import styled from "styled-components";
import { GlobalStyles } from "../../GlobalStyle.styled";

export const StyledHeader = styled.header`
  position: relative;
`;

export const StyledInner = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;

  @media screen and (max-width: 991px) {
    max-width: 274px;
    width: 100%;
  }
`;

export const StyledLogoWrapper = styled.nav`
  width: 100%;
  max-width: 1128px;
  padding: 0 15x;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    max-width: none;
    padding: 0;
    margin: 0;
  }
`;

export const StyledContainerObject = styled.div`
  max-width: 1128px;
  width: 100%;
`;

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
`;

export const StyledLogoInner = styled.div`
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

export const StyledBox = styled.div`
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #ffffff;
`;

export const StyledLogo = styled.div`
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

export const StyledLogoImage = styled.img`
  cursor: pointer;
  max-width: 240px;
  width: 100%;
`;

export const StyledCartSection = styled.div`
  cursor: pointer;
  flex: 0 0 auto;
  width: 38px;
  max-width: 100%;
  background-color: black;
  border-radius: 50%;
  height: 38px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
