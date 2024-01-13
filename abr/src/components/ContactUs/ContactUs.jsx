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
  StyledCheckBoxInner,
  StyledTextInnerWrapper,
  StyledInputCheckBox,
  StyledCheckBoxText,
  StyledSendBtnWrapper,
  StyledInputBtn,
  StyledFooterSection,
  StyledFooterWrapper,
  StyledFooterInner,
  StyledFooterContainer,
  StyledFooterMain,
} from "./ContactUs.styled";
import { Footer } from "./Footer/Footer";

export const ContactUs = () => {
  return (
    <div id="contactsection">
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
                    ARE YOU INTERESTED IN <br /> PURCHASING A VERY SPECIAL
                    <br /> PIECE?
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
                <StyledCheckBoxInner>
                  <StyledTextInnerWrapper>
                    <StyledInputCheckBox
                      type="checkbox"
                      name="accept-privacy-policy"
                      id="accept-privacy-policy"
                      aria-required="true"
                      aria-invalid="false"
                    />
                  </StyledTextInnerWrapper>
                  <StyledCheckBoxText>
                    {" "}
                    Accept privacy policy
                  </StyledCheckBoxText>
                </StyledCheckBoxInner>
                <StyledSendBtnWrapper>
                  <StyledSendBtnWrapper>
                    <StyledInputBtn type="button">Send Request</StyledInputBtn>
                  </StyledSendBtnWrapper>
                </StyledSendBtnWrapper>
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
    </div>
  );
};
