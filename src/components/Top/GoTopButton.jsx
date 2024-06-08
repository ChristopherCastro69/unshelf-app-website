import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { arrowUp } from "ionicons/icons";

const GoTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY >= 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`go-top ${isVisible ? "active" : ""}`}
      data-go-top
      onClick={scrollToTop}
    >
      <IonIcon icon={arrowUp} />
    </button>
  );
};

export default GoTopButton;
