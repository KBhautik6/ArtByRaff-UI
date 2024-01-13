import React from "react";
import {
  StyledCustomSlider,
  StyledSliderWrapper,
  StyledSliderImageInner,
  StyledSliderImage,
  StyledSlider,
  StyledSliderNameWrapper,
  StyledSliderName,
} from "./Customized.styled";

export const CustomizedSlider = ({ data, index, centerIndex }) => {
  return (
    <StyledCustomSlider>
      <StyledSliderWrapper>
        <StyledSlider isActive={index === centerIndex}>
          <StyledSliderImageInner
            style={{
              opacity: index === centerIndex ? 1 : 0.5,
            }}
          >
            <StyledSliderImage src={data.Cimg} alt="" />
          </StyledSliderImageInner>
          {index === centerIndex && (
            <StyledSliderNameWrapper>
              <StyledSliderName>{data.Cname}</StyledSliderName>
            </StyledSliderNameWrapper>
          )}
        </StyledSlider>
      </StyledSliderWrapper>
    </StyledCustomSlider>
  );
};
