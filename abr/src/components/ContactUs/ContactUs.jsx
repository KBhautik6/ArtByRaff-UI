import React from "react";
import {
  StyledWrapper,
  StyledContactWrapper,
  StyledHeadingWrapper,
  StyledTitle,
  StyledHeading,
  StyledContactFormWrapper,
  StyledContactFormInner,
  StyledContactForm,
  StyledFormTitle,
  StyledTextWrapper,
  StyledText,
  StyledFormControl,
  StyledInputText,
  StyledInputTelephone,
  StyledInputEmail,
  StyledInputElse,
  StyledFooterSection,
  StyledFooterWrapper,
  StyledFooterInner,
  StyledFooterContainer,
  StyledFooterMain,
} from "./ContactUs.styled";
import { Footer } from "./Footer/Footer";
import { CopyWrite } from "./CopyWrite/CopyWrite";

export const ContactUs = () => {
  return (
    <>
      <section>
        <StyledWrapper>
          <div className="contact">
            <div className="contact-form">
              <StyledContactWrapper>
                <StyledHeadingWrapper>
                  <StyledTitle>
                    <p>COMMISSIONS</p>
                  </StyledTitle>
                  <StyledHeading>
                    ARE YOU INTERESTED IN PURCHASING A VERY SPECIAL PIECE?
                  </StyledHeading>
                </StyledHeadingWrapper>

                <StyledContactFormWrapper>
                  <StyledContactFormInner>
                    <StyledContactForm>
                      <StyledFormTitle>
                        Drop your contact details here. We will connect you back
                        !!
                      </StyledFormTitle>
                      <StyledTextWrapper>
                        <StyledText> What is your </StyledText>
                        <StyledFormControl>
                          <StyledInputText
                            type="text"
                            name="your-name"
                            size="40"
                            placeholder="NAME*"
                          />
                        </StyledFormControl>

                        <StyledText> ? What is your </StyledText>
                        <StyledFormControl>
                          <StyledInputTelephone
                            type="text"
                            name="your-telephone"
                            size="40"
                            placeholder="TELEPHONE NUMBER"
                          />
                        </StyledFormControl>

                        <StyledText> ? What is your </StyledText>
                        <StyledFormControl>
                          <StyledInputEmail
                            type="email"
                            name="your-email"
                            size="40"
                            placeholder="EMAIL ADDRESS*"
                          />
                        </StyledFormControl>

                        <StyledText>?</StyledText>
                        <StyledFormControl>
                          <StyledInputElse
                            type="text"
                            name="anything-else"
                            size="40"
                            placeholder="Is there anything else what you want to say?"
                          />
                        </StyledFormControl>
                      </StyledTextWrapper>
                    </StyledContactForm>
                  </StyledContactFormInner>
                </StyledContactFormWrapper>

                <StyledFooterSection>
                  <StyledFooterWrapper>
                    <StyledFooterInner>
                      <StyledFooterContainer>
                        <StyledFooterMain>
                          <Footer />
                        </StyledFooterMain>
                      </StyledFooterContainer>
                    </StyledFooterInner>
                  </StyledFooterWrapper>
                </StyledFooterSection>
              </StyledContactWrapper>
            </div>
          </div>
        </StyledWrapper>
      </section>
      <CopyWrite/>
    </>
  );
};
