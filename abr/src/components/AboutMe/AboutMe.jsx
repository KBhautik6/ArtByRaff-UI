import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledInnerWrapper,
  StyledLeftAboutMe,
  StyledAboutMeImage,
  StyledRightAboutMe,
  StyledHeading,
  StyledAboutMeDescription,
  StyledSignatureWrapper,
  StyledSignature,
  StyledSignatureImage,
} from "./AboutMe.styled";
import { Navbar } from "../Header/Navbar/Navbar";

export const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <StyledSection>
        <StyledWrapper>
          <br />
          <br />
          <br />
          <br />
          <StyledInnerWrapper>
            <StyledLeftAboutMe>
              <StyledAboutMeImage
                src="https://artbyraff.com/wp-content/uploads/2020/06/aboutImage.png"
                alt="about-image"
              />
            </StyledLeftAboutMe>
            <StyledRightAboutMe>
              <div>
                <StyledHeading>About Me</StyledHeading>
                <StyledAboutMeDescription>
                  I am a self-taught Viennese artist. Since my early childhood,
                  I have been involved in making graphic art. I have
                  experimented with pretty much any material and technique there
                  is. I love to mix a wide variety of materials from sprays,
                  acrylics to chalk, colored pencils and more. Thats are my
                  preferred media because they allow me to work flexibly and
                  intuitively.
                  <br />
                  <br />
                  My style is strongly oriented on form and color. I draw
                  inspiration from everyday life and my surroundings. It is
                  especially important to me that my art is approachable and
                  that it reflects life. I want to draw the viewer in with
                  intriguing combinations of shapes and colors and evoke
                  feelings of joy and pleasure.
                </StyledAboutMeDescription>
                <StyledSignatureWrapper>
                  <StyledSignature>Raffaello Djordjevic</StyledSignature>
                  <div>
                    <StyledSignatureImage
                      src="https://artbyraff.com/wp-content/uploads/2020/07/logo.png"
                      alt="signature-Raffaello"
                    />
                  </div>
                </StyledSignatureWrapper>
              </div>
            </StyledRightAboutMe>
          </StyledInnerWrapper>
        </StyledWrapper>
      </StyledSection>
    </div>
  );
};
