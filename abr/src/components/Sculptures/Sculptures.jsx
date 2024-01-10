import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledInnerWrapper,
  StyledHeadingWrapper,
  StyledTitle,
  StyledHeading,
  StyledViewMore,
  StyledBoxWrapper,
  StyledBtn,
} from "./Sculptures.styled";

import {
  StyledHomeProducts,
  StyledInnerHomeProducts,
  StyledHomeProductGird,
  StyledHomeProductsList,
} from "../Original/Original.styled";

import { SData } from "../Original/Data";
import { MoreInfo } from "../Original/MoreInfo";

export const Sculptures = () => {
  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <StyledInnerWrapper>
            <StyledHeadingWrapper>
              <StyledTitle>
                <p>ART BY RAFF</p>
              </StyledTitle>
              <StyledHeading>Sculptures & furniture</StyledHeading>
            </StyledHeadingWrapper>

            <StyledHomeProducts>
              <StyledInnerHomeProducts>
                <StyledHomeProductGird>
                  <StyledHomeProductsList>
                    {SData.map((item) => (
                      <MoreInfo
                        key={item.id}
                        dlink={item.dlink}
                        dproductimage={item.dproductimage}
                        dimagelink={item.dimagelink}
                        dproductname={item.dproductname}
                        dprice={item.dprice}
                        dproductinfo={item.dproductinfo}
                      />
                    ))}
                  </StyledHomeProductsList>
                </StyledHomeProductGird>
              </StyledInnerHomeProducts>
            </StyledHomeProducts>

            <StyledViewMore>
              <StyledBoxWrapper>
                <StyledBtn>Load More</StyledBtn>
              </StyledBoxWrapper>
            </StyledViewMore>
          </StyledInnerWrapper>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};
