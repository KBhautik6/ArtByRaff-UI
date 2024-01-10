import React from "react";
import {
  StyledFooterLeft,
  StyledFooterBox,
  StyledFooterLogo,
  StyledFooterLink,
  StyledFooterImage,
  StyledFooterText,
  StyledFooterMenu,
  StyledFooterList,
  StyledFooterListLink,
  StyledFooterListLinkImprint,
  StyledFooterHead,
  StyledEmailFormWrapper,
  StyledEmailForm,
  StyledYourEmail,
  StyledYourEmailSubmit,
  StyledFooterRight,
  StyledRightBox,
  StyledContactinfo,
  StyledFooterDescription,
  StyledContactEmailinfo,
  StyledEmailLink,
  StyledSocailMedia,
  StyleSocialMediaMenu,
  StyleSocialMediaList,
  StyledFacebookLink,
  StyledInstagramLink,
} from "../ContactUs.styled";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <>
      <StyledFooterLeft>
        <StyledFooterBox>
          <StyledFooterLogo>
            <StyledFooterLink href="https://artbyraff.com/" title="Art By Raff">
              <StyledFooterImage
                src="https://artbyraff.com/wp-content/uploads/2020/06/artbyraff-logo.png"
                alt="logo"
              />
            </StyledFooterLink>
          </StyledFooterLogo>

          <StyledFooterText>
            <div>
              <StyledFooterMenu>
                <StyledFooterList>
                  <StyledFooterListLink href="https://artbyraff.com/about-me/">
                    About Me
                  </StyledFooterListLink>
                </StyledFooterList>

                <StyledFooterList>
                  <StyledFooterListLink href="https://artbyraff.com/privacy-policy/">
                    Privacy Policy
                  </StyledFooterListLink>
                </StyledFooterList>

                <StyledFooterList>
                  <StyledFooterListLinkImprint href="https://artbyraff.com/imprint/">
                    Imprint
                  </StyledFooterListLinkImprint>
                </StyledFooterList>
              </StyledFooterMenu>

              <StyledFooterHead>Subscribe Newsletter</StyledFooterHead>

              <StyledEmailFormWrapper>
                <div>
                  <StyledEmailForm>
                    <StyledYourEmail
                      type="text"
                      placeholder="Your email"
                      name="email"
                    />
                    <StyledYourEmailSubmit></StyledYourEmailSubmit>
                  </StyledEmailForm>
                </div>
              </StyledEmailFormWrapper>
            </div>
          </StyledFooterText>
        </StyledFooterBox>
      </StyledFooterLeft>

      <StyledFooterRight>
        <StyledRightBox>
          <StyledContactinfo>
            <StyledFooterDescription>
              Raffaello Djordjevic
            </StyledFooterDescription>

            <StyledContactEmailinfo>
              <p>E-Mail:</p>
              <StyledEmailLink href="raffaello@artbyraff.com">
                raffaello@artbyraff.com
              </StyledEmailLink>
            </StyledContactEmailinfo>
          </StyledContactinfo>

          <StyledSocailMedia>
            <StyleSocialMediaMenu>
              <StyleSocialMediaList>
                <StyledFacebookLink href="https://www.facebook.com/people/artbyraffaellxo/100064049135311/">
                  {/*icon of facebook */}
                  <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                </StyledFacebookLink>
              </StyleSocialMediaList>

              <StyleSocialMediaList>
                <StyledInstagramLink href="https://www.instagram.com/artbyraffaellxo/?igshid=1wvoaq4fiob41">
                  {/*icon of instagram */}
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </StyledInstagramLink>
              </StyleSocialMediaList>
            </StyleSocialMediaMenu>
          </StyledSocailMedia>
        </StyledRightBox>
      </StyledFooterRight>
    </>
  );
};
