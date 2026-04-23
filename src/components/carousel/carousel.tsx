import React from "react";
import "./carousel.css";

type CarouselProps = {
  children: React.ReactNode;
  withDot?: boolean;
  duration?: number; /* animation speed in seconds */
  gap?: number; /* gap between items in px */
};

function Carousel({ children, withDot = false, duration = 20, gap = 60 }: CarouselProps) {
  const items = React.Children.toArray(children);

  // duplicate for seamless infinite scroll
  const trackItems = [...items, ...items];

  return (
    <div className="carousel">
      <div className="carousel-track" style={{ animationDuration: `${duration}s` }}>
        <div className="carousel-group">
          {trackItems.map((child, index) => (
            <span
              key={index}
              className={`carousel-item ${withDot ? "with-dot" : ""}`}
              style={
                {
                  marginRight: `${gap}px`,
                  "--gap": `${gap}px` /* used for dot positioning */,
                } as React.CSSProperties
              }
            >
              {child}
            </span>
          ))}
        </div>

        {/* duplicate group for seamless loop */}
        <div className="carousel-group" aria-hidden="true">
          {trackItems.map((child, index) => (
            <span
              key={`dup-${index}`}
              className={`carousel-item ${withDot ? "with-dot" : ""}`}
              style={
                {
                  marginRight: `${gap}px`,
                  "--gap": `${gap}px` /* used for dot positioning */,
                } as React.CSSProperties
              }
            >
              {child}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
