import React from "react";
import {
  StyledProductList,
  StyledProductBox,
  StyledProductImageWrapper,
  StyledProductImageLink,
  StyledProductImage,
  StyledProductMoreInformation,
  StyledProductName,
  StyledProductNameImage,
  StyledProductPrice,
  StyledProductCategory,
  StyledProductSize,
} from "./Original.styled";

// import Data from "./Data";

export function MoreInfo(props) {
  return (
    <div>
      <StyledProductList>
        <StyledProductBox>
          {/* Product Image section */}
          <StyledProductImageWrapper>
            <StyledProductImageLink href={props.dlink} >
              <StyledProductImage src={props.dproductimage} alt="" />
            </StyledProductImageLink>
          </StyledProductImageWrapper>

          {/* Product more information */}
          <StyledProductMoreInformation>
            <StyledProductName>
              <StyledProductNameImage href={props.dimagelink}>
                {props.dproductname}
              </StyledProductNameImage>
            </StyledProductName>
            <StyledProductPrice>
              <span>{props.dprice}</span>
            </StyledProductPrice>
            <StyledProductCategory>{props.dproductinfo}</StyledProductCategory>
            <StyledProductSize>{props.dsize}</StyledProductSize>
          </StyledProductMoreInformation>
        </StyledProductBox>
      </StyledProductList>
    </div>
  );
}
