import React from 'react';
import {
  StyledCopywriteWrapper,
  StyledCopywritecontainer,
  StyleCopywriteInner,
  StyleYearWrapper,
  StyledYear,
  StyledABRLink,
  StyledFootCopy,
  StyledDesignAndDevelopment,
  StyledHeartIcon,
  StyledDesignAndDevelopmentLink,
} from "../ContactUs.styled";

export const CopyWrite = () => {
  return (
    <>
      <StyledCopywriteWrapper>
        <StyledCopywritecontainer>
          <StyleCopywriteInner>
            <StyleYearWrapper>
              <StyledYear>
                © 2024 
              </StyledYear>
              <StyledABRLink href="https://artbyraff.com/"> ArtbyRaff </StyledABRLink>
            </StyleYearWrapper>

            <StyledFootCopy>
              <StyledDesignAndDevelopment>
                <StyledHeartIcon>
                  ❤️
                </StyledHeartIcon>
                <StyledDesignAndDevelopmentLink href="https://appsandmore24.com/">Appsandmore24</StyledDesignAndDevelopmentLink>
              </StyledDesignAndDevelopment>
            </StyledFootCopy>
          </StyleCopywriteInner>
        </StyledCopywritecontainer>
      </StyledCopywriteWrapper>
    </>
  );
};
