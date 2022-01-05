import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Slider = ({ children }) => {
  const config = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-next-button",
      prevEl: ".swiper-prev-button",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      disableOnInteraction: true,
    },
    a11y: true,
  };

  return (
    <SliderContainer>
      <Swiper {...config}>
        {children.map((child) => {
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

  .swiper-slide {
    height: auto;
  }
`;

const NavButton = styled.div`
  background: var(--bs-primary);
  position: absolute;
  top: 50%;
  left: ${(props) => (props.prev ? "10px" : "auto")};
  right: ${(props) => (props.next ? "10px" : "auto")};
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
  color: var(--bs-dark);

  svg {
    width: 100%;
    height: auto;
  }
`;

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Slider;
