import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

SwiperCore.use([Navigation, A11y]);

const Slider = ({ children }) => {
  const navigation = {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button",
  };

  return (
    <SliderContainer>
      <Swiper spaceBetween={30} slidesPerView={3} navigation={navigation} a11y>
        {children.map(child => {
          return <SwiperSlide key={child.key}>{child}</SwiperSlide>;
        })}
      </Swiper>
      <NavButton className="swiper-prev-button" prev>
        <FiChevronLeft />
      </NavButton>
      <NavButton className="swiper-next-button" next>
        <FiChevronRight />
      </NavButton>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;

  .swiper-container {
    margin: 0 2rem;
  }

  .swiper-wrapper {
    padding: 30px 0;
  }
`;

const NavButton = styled.div`
  background: ${props => props.theme.colors.primary};
  position: absolute;
  top: 50%;
  left: ${props => (props.prev ? "10px" : "auto")};
  right: ${props => (props.next ? "10px" : "auto")};
  width: var(--swiper-navigation-size);
  height: auto;
  margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
  padding: 0.5rem;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.dark};

  svg {
    width: 100%;
    height: auto;
  }
`;

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Slider;
