import React from "react";
import { MdClose } from "react-icons/md";
import {
  StyledSection,
  StyledContainer,
  StyledWrapper,
  StyledCloseWrapper,
  StyledCloseIcon,
  StyledCloseText,
  StyledImageWrapper,
  StyledImage,
  StyledFullNavbarList,
  StyledFullNavbarListWrapper,
  StyledIconWrapper,
  StyledSocialMedia,
  FacebookIcon,
  InstagramIcon,
} from "./FullNavbar.styled";
import { Link } from "react-router-dom";

export const FullNavbar = () => {
  return (
    <div>
      <StyledSection>
        <StyledContainer>
          <StyledWrapper>
            <StyledCloseWrapper>
              <Link to="/">
                <StyledCloseIcon>
                  <MdClose />
                </StyledCloseIcon>
              </Link>
              <StyledCloseText>Close</StyledCloseText>
            </StyledCloseWrapper>
            <StyledImageWrapper>
              <StyledImage
                src="https://artbyraff.com/wp-content/uploads/2020/06/artbyraff-logo.png"
                alt="art-by-raff-logo"
              />
            </StyledImageWrapper>
          </StyledWrapper>
          <StyledFullNavbarListWrapper>
            <StyledFullNavbarList>
              <ul>
                <li>About Me</li>
                <li>Handmade</li>
                <li>Sculptures & Furniture</li>
                <li>Contact</li>
              </ul>
            </StyledFullNavbarList>
          </StyledFullNavbarListWrapper>
          <StyledIconWrapper>
            <StyledSocialMedia>
              <FacebookIcon />
              <InstagramIcon />
            </StyledSocialMedia>
          </StyledIconWrapper>
        </StyledContainer>
      </StyledSection>
    </div>
  );
};
