import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledHeadingWrapper,
  StyledHeadingWelcome,
  StyledHeadingABR,
  StyledText,
  StyledDescriptionWrapper,
  StyledDescription,
} from "./ArtByRaff.styled";

export const ArtByRaff = () => {
  return (
    <div id="aboutmesection">
      <StyledSection>
        <StyledWrapper>
          <StyledHeadingWrapper>
            <StyledHeadingWelcome>
              <p>WELCOME</p>
            </StyledHeadingWelcome>
            <StyledHeadingABR>ART BY RAFF</StyledHeadingABR>
          </StyledHeadingWrapper>
          <StyledText>
            <StyledDescriptionWrapper>
              <StyledDescription>
                <p>
                  Welcome to my page. My name is Raffaello Djordevic and I am a
                  Viennese artist. I make mostly pop-arts and mixed-media
                  pieces.
                  <br />
                  <br />
                  You can purchase original works as well as prints on my
                  homepage. I also take commissions. To commission a piece, just
                  contact me via the homepage.
                </p>
              </StyledDescription>
            </StyledDescriptionWrapper>
          </StyledText>
        </StyledWrapper>
      </StyledSection>
    </div>
  );
};
