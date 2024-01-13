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
  StyledAddtoBtn,
} from "./Original.styled";

export function MoreInfo(props) {
  return (
    <div>
      <StyledProductList>
        <StyledProductBox>
          <StyledProductImageWrapper>
            <StyledProductImageLink href={props.dlink}>
              <StyledProductImage src={props.dproductimage} alt="paint-image" />
            </StyledProductImageLink>
          </StyledProductImageWrapper>
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
            {props.dprice !== "Sold" && (
              <StyledAddtoBtn>{props.dsvg}</StyledAddtoBtn>
            )}
          </StyledProductMoreInformation>
        </StyledProductBox>
      </StyledProductList>
    </div>
  );
}
