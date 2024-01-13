import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledSection,
  StyledContainer,
  StyledCustomSlider,
  StyledSliderWrapper,
  StyledSliderImage,
  StyledNextArrow,
  StyledSlider,
  StyledPreviousArrow,
  StyledSliderNameWrapper,
  StyledSliderName,
  StyledHeadingWrapper,
  StyledHeading,
} from "./Customized.styled";
import { Cdata } from "./Data";

export const Customized = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const handleBeforeChange = (current, next) => {
    setCenterIndex(next);
  };

  const calculateImageOpacity = (currentIndex, slideIndex) => {
    return currentIndex === slideIndex ? 1 : 0.5;
  };

  const settings = {
    dots: false,
    arrows: true,
    centerMode: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: handleBeforeChange,
  };

  useEffect(() => {
    setCenterIndex(settings.initialSlide);
  }, [settings.initialSlide]);

  return (
    <div>
      <StyledSection>
        <StyledContainer>
          <StyledHeadingWrapper>
            <StyledHeading>„ customized “</StyledHeading>
          </StyledHeadingWrapper>
          <Slider {...settings}>
            {Cdata.map((c, index) => (
              <StyledCustomSlider key={c.Cname}>
                <StyledSliderWrapper>
                  <StyledSlider isActive={index === centerIndex}>
                    <StyledSliderImage
                      style={{
                        opacity: calculateImageOpacity(centerIndex, index),
                      }}
                    >
                      <img src={c.Cimg} alt="" />
                    </StyledSliderImage>
                    {index === centerIndex && (
                      <StyledSliderNameWrapper>
                        <StyledSliderName>{c.Cname}</StyledSliderName>
                      </StyledSliderNameWrapper>
                    )}
                  </StyledSlider>
                </StyledSliderWrapper>
              </StyledCustomSlider>
            ))}
          </Slider>
        </StyledContainer>
      </StyledSection>
    </div>
  );
};
