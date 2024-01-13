import { ArtByRaff } from "../ArtByRaff/ArtByRaff";
import { ContactUs } from "../ContactUs/ContactUs";
import { Original } from "../Original/Original";
import { Sculptures } from "../Sculptures/Sculptures";
import { Navbar } from "../Header/Navbar/Navbar";
import { Customized } from "../Customized/Customized";
import {
  StyledAbout,
  StyledSection,
  StyledAboutWrapper,
  StyledHeaderDrag,
  StyledBanner,
  StyledInner,
  StyledWrapper,
} from "./Header.styled";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <Navbar />
      <StyledSection>
        <StyledWrapper>
          <StyledHeaderDrag>
            <StyledInner>
              <StyledBanner>
                <StyledAboutWrapper>
                  <Link to="about">
                    <StyledAbout>ABOUT ME</StyledAbout>
                  </Link>
                </StyledAboutWrapper>
              </StyledBanner>
            </StyledInner>
          </StyledHeaderDrag>
        </StyledWrapper>
      </StyledSection>
      <ArtByRaff />
      <Original />
      <Sculptures />
      <Customized />
      <ContactUs />
    </>
  );
}
