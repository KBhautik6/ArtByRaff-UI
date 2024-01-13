import React from "react";
import {
  StyledSection,
  StyledFooterWrapper,
  StyledFooterBox,
  StyledFooterInfo,
  StyledFooterText,
  StyledFooterContainer,
  StyledFooterDivide,
  StyledFooterLeft,
  StyledFooterLogoWrapper,
  StyledFooterLinksWrapper,
  StyledFooterLink,
  StyledFooterName,
  StyledFooterEmail,
  StyledSubcribe,
  StyledFooterEmailWrapper,
  StyledFooterEmailPart,
  StyledSubmitBtn,
  StyledFooterRight,
  StyledFooterRightBox,
  StyledFooterRightBoxWrapper,
  StyledFooterDescription,
  StyledFooterDescriptionEmail,
  StyledIconContainer,
  StyledIconWrapper,
  FacebookIcon,
  InstagramIcon,
  StyledCopyWriteSection,
  StyledCopyWriteWrapper,
  StyledCopyWriteTextWrapper,
  StyledCopyWriteText,
  HeartIcon,
  StyledDesignDeveloperText,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <>
      <StyledSection>
        <StyledFooterWrapper>
          <StyledFooterContainer>
            <StyledFooterDivide>
              <StyledFooterLeft>
                <StyledFooterBox>
                  <StyledFooterLogoWrapper>
                    <img
                      src="https://artbyraff.com/wp-content/uploads/2020/06/artbyraff-logo.png"
                      alt="artbyrafflogo"
                    />
                  </StyledFooterLogoWrapper>
                  <StyledFooterLinksWrapper>
                    <StyledFooterLink>
                      <StyledFooterText>About Me</StyledFooterText>
                      <StyledFooterText>Privacy Policy</StyledFooterText>
                      <StyledFooterText>Imprint</StyledFooterText>
                    </StyledFooterLink>
                  </StyledFooterLinksWrapper>
                </StyledFooterBox>
                <StyledFooterInfo>
                  <StyledFooterName>Raffaello Djordjevic</StyledFooterName>
                  <StyledFooterEmailPart>
                    E-Mail: raffaello@artbyraff.com
                  </StyledFooterEmailPart>
                </StyledFooterInfo>
                <StyledSubcribe>Subscribe Newsletter</StyledSubcribe>
                <StyledFooterEmailWrapper>
                  <StyledFooterEmail
                    type="email"
                    name="your-name"
                    id="your-name"
                    size="40"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Your Email*"
                  />
                  <StyledSubmitBtn />
                </StyledFooterEmailWrapper>
              </StyledFooterLeft>
              <StyledFooterRight>
                <StyledFooterRightBox>
                  <StyledFooterRightBoxWrapper>
                    <StyledFooterDescription>
                      Raffaello Djordjevic
                    </StyledFooterDescription>
                    <StyledFooterDescriptionEmail>
                      E-Mail: raffaello@artbyraff.com
                    </StyledFooterDescriptionEmail>
                  </StyledFooterRightBoxWrapper>
                  <StyledIconContainer>
                    <StyledIconWrapper>
                      <FacebookIcon />
                      <InstagramIcon />
                    </StyledIconWrapper>
                  </StyledIconContainer>
                </StyledFooterRightBox>
              </StyledFooterRight>
            </StyledFooterDivide>
          </StyledFooterContainer>
        </StyledFooterWrapper>
      </StyledSection>
      <StyledCopyWriteSection>
        <StyledFooterContainer>
          <StyledCopyWriteWrapper>
            <StyledCopyWriteTextWrapper>
              <StyledCopyWriteText>© 2024 ArtbyRaff</StyledCopyWriteText>
            </StyledCopyWriteTextWrapper>
            <StyledCopyWriteTextWrapper>
              <HeartIcon />
              <StyledDesignDeveloperText>
                Designed and developed by Appsandmore24
              </StyledDesignDeveloperText>
            </StyledCopyWriteTextWrapper>
          </StyledCopyWriteWrapper>
        </StyledFooterContainer>
      </StyledCopyWriteSection>
    </>
  );
};
