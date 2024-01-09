import React from "react";
import {
  StyledSection,
  StyledHandPaintingWrapper,
  StyledHandPaintingInner,
  StyledProductContainer,
  StyledHeadingWrapper,
  StyledHeadingInner,
  StyledHeadingTitle,
  StyledHeading,
  StyledHomeProducts,
  StyledInnerHomeProducts,
  StyledHomeProductGird,
  StyledHomeProductsList,
} from "./Original.styled";
import { MoreInfo } from "./MoreInfo";
import { Data } from "./Data";

export const Original = () => (
  <div>
    <StyledSection>
      <StyledHandPaintingWrapper>
        <StyledHandPaintingInner>
          <StyledProductContainer>
            <StyledHeadingWrapper>
              <StyledHeadingInner>
                <StyledHeadingTitle>ORIGNALS</StyledHeadingTitle>
                <StyledHeading>
                  <p>ON CANVAS</p>
                </StyledHeading>
              </StyledHeadingInner>
            </StyledHeadingWrapper>

            {/* Props section is going to start */}

            <StyledHomeProducts>
              <StyledInnerHomeProducts>
                <StyledHomeProductGird>
                  <StyledHomeProductsList>
                    {Data.map((item) => (
                      <MoreInfo
                        key={item.id}
                        dlink={item.dlink}
                        dproductimage={item.dproductimage}
                        dimagelink={item.dimagelink}
                        dproductname={item.dproductname}
                        dprice={item.dprice}
                        dproductinfo={item.dproductinfo}
                        dsize={item.dsize}
                      />
                    ))}
                  </StyledHomeProductsList>
                </StyledHomeProductGird>
              </StyledInnerHomeProducts>
            </StyledHomeProducts>
          </StyledProductContainer>
        </StyledHandPaintingInner>
      </StyledHandPaintingWrapper>
    </StyledSection>
  </div>
);

