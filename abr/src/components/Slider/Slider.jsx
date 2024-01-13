import {
  StyledSection,
  StyledWrapperLine,
  StyledNaviagationBar,
  StyledContainer,
  StyledLine,
  StyledLinkWrapper,
} from "./Slider.styled";
export function Slider() {
  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledNaviagationBar>
            <StyledWrapperLine>
              <StyledLine>
                <a href="#aboutmesection">
                  <StyledLinkWrapper>About Me</StyledLinkWrapper>
                </a>
              </StyledLine>
            </StyledWrapperLine>
          </StyledNaviagationBar>
          <StyledNaviagationBar>
            <StyledWrapperLine>
              <StyledLine>
                <a href="#originalsection">
                  <StyledLinkWrapper>SculpturesOriginals</StyledLinkWrapper>
                </a>
              </StyledLine>
            </StyledWrapperLine>
          </StyledNaviagationBar>
          <StyledNaviagationBar>
            <StyledWrapperLine>
              <StyledLine>
                <a href="#sculptures">
                  <StyledLinkWrapper>Sculptures</StyledLinkWrapper>
                </a>
              </StyledLine>
            </StyledWrapperLine>
          </StyledNaviagationBar>
          <StyledNaviagationBar>
            <StyledWrapperLine>
              <StyledLine>
                <a href="#contactsection">
                  <StyledLinkWrapper>Contact Us</StyledLinkWrapper>
                </a>
              </StyledLine>
            </StyledWrapperLine>
          </StyledNaviagationBar>
        </StyledContainer>
      </StyledSection>
    </>
  );
}
