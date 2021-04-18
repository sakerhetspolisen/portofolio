import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const CanvasBackground = () => {
  const [backgroundStyle, setBackgroundStyle] = useState({
    transition: "all 200ms ease-in",
  });

  useScrollPosition(
    ({ currPos }) => {
      const isVisible = currPos.y == 0;

      const shouldBeStyle = {
        opacity: isVisible ? "1" : "0",
        transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(backgroundStyle))
        return;

      setBackgroundStyle(shouldBeStyle);
    },
    [backgroundStyle]
  );
  return (
    <div
      id="container"
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        overflow: "hidden",
        top: "0",
        left: "0",
        zIndex: "0",
        ...backgroundStyle,
      }}
    >
      <canvas
        id="canvas3d"
        style={{
          width: "100%",
          height: "100%",
          outline: "none",
        }}
      ></canvas>
    </div>
  );
};
export default CanvasBackground;