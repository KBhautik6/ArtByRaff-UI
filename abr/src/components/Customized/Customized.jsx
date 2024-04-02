import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledSection,
  StyledContainer,
  StyledHeadingWrapper,
  StyledHeading,
} from "./Customized.styled";
import { Cdata } from "./Data";
import { CustomizedSlider } from "./Customized.props";

export const Customized = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const handleBeforeChange = (current, next) => {
    setCenterIndex(next);
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
              <CustomizedSlider
                key={c.Cname}
                data={c}
                index={index}
                centerIndex={centerIndex}
              />
            ))}
          </Slider>
        </StyledContainer>
      </StyledSection>
    </div>
  );
};
