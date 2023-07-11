import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="neueMontreal"
      rel="preload"
      href="./fonts/PPNeueMontreal-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="neueMontrealBold"
      rel="preload"
      href="./fonts/PPNeueMontreal-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ]);
};
