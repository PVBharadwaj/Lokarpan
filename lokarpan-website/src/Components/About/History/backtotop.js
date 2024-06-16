import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
const ButtonContainer = styled.span`
  position: fixed;
  bottom: 32px;
  left: 32px;
  align-items: center;
  height: 32px;
  width: 32px;
  justify-content: center;
  z-index: 99;
  cursor: pointer;
  animation: fadeIn 0.3s;
  
  color:#3468C0;
  font-size:2rem;
  border-radius: 4px;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? "flex" : "none"};

  &:hover {
    color:#1D2B53;
  }
`;

const BackToTopButton = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      setScrollCount((prevCount) => prevCount + 1);

      if (scrollCount % 25 === 0) {
        setShowButton(!showButton);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [scrollCount, showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faChevronUp} />
    </ButtonContainer>
  );
};

export default BackToTopButton;
