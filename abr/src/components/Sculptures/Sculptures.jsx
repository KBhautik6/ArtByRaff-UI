import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledInnerWrapper,
  StyledHeadingWrapper,
  StyledTitle,
  StyledHeading,
  StyledProductSculphturesList,
  StyledHomeProductsList,
} from "./Sculptures.styled";
import { StyledAddtoBtn } from "../Original/Original.styled";
import { SvgLink } from "../Original/Data";

import {
  StyledHomeProducts,
  StyledInnerHomeProducts,
  StyledHomeProductGird,
  StyledProductBox,
  StyledProductImageWrapper,
  StyledProductImageLink,
  StyledProductImage,
  StyledProductMoreInformation,
  StyledProductName,
  StyledProductNameImage,
  StyledProductPrice,
  StyledProductCategory,
} from "../Original/Original.styled";

export const Sculptures = () => {
  return (
    <div id="sculptures">
      <StyledSection>
        <StyledWrapper>
          <StyledInnerWrapper>
            <StyledHeadingWrapper>
              <StyledTitle>
                <p>ART BY RAFF</p>
              </StyledTitle>
              <StyledHeading>
                Sculptures & <br />
                furniture
              </StyledHeading>
            </StyledHeadingWrapper>
            <StyledHomeProducts>
              <StyledInnerHomeProducts>
                <StyledHomeProductGird>
                  <StyledHomeProductsList>
                    <StyledProductSculphturesList>
                      <StyledProductBox>
                        <StyledProductImageWrapper>
                          <StyledProductImageLink href="https://artbyraff.com/product/untitled-4/">
                            <StyledProductImage
                              src="https://artbyraff.com/wp-content/uploads/2022/04/Layer-2-768x961.png"
                              alt="sculpture-image"
                            />
                          </StyledProductImageLink>
                        </StyledProductImageWrapper>
                        <StyledProductMoreInformation>
                          <StyledProductName>
                            <StyledProductNameImage href="https://artbyraff.com/product/untitled-4/">
                              “ UNTITLED “
                            </StyledProductNameImage>
                          </StyledProductName>
                          <StyledProductPrice>
                            <span>"€1,300.00"</span>
                          </StyledProductPrice>
                          <StyledProductCategory>
                            ACRYL, SPRAY, PLASTER
                          </StyledProductCategory>
                          <StyledAddtoBtn>{SvgLink}</StyledAddtoBtn>
                        </StyledProductMoreInformation>
                      </StyledProductBox>
                    </StyledProductSculphturesList>
                    <StyledProductSculphturesList>
                      <StyledProductBox>
                        <StyledProductImageWrapper>
                          <StyledProductImageLink href="https://artbyraff.com/product/warhol-basquiat-table-1-of-1/">
                            <StyledProductImage
                              src="https://artbyraff.com/wp-content/uploads/2021/01/IMG_5905-768x1024.jpg"
                              alt="sculpture-image"
                            />
                          </StyledProductImageLink>
                        </StyledProductImageWrapper>
                        <StyledProductMoreInformation>
                          <StyledProductName>
                            <StyledProductNameImage href="https://artbyraff.com/product/warhol-basquiat-table-1-of-1/">
                              “ WARHOL & BASQUIAT “ -TABLE 1 OF 1
                            </StyledProductNameImage>
                          </StyledProductName>
                          <StyledProductCategory>
                            ACRYL, PENCIL, SPRAY, ON WOOD
                          </StyledProductCategory>
                        </StyledProductMoreInformation>
                      </StyledProductBox>
                    </StyledProductSculphturesList>
                  </StyledHomeProductsList>
                </StyledHomeProductGird>
              </StyledInnerHomeProducts>
            </StyledHomeProducts>
          </StyledInnerWrapper>
        </StyledWrapper>
      </StyledSection>
    </div>
  );
};
