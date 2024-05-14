import React, { useEffect, useRef } from "react";

const IframeComponent = () => {
  const iframeRef = useRef(null);

  return (
    <iframe
      frameBorder="0"
      ref={iframeRef}
      id={"iframe"}
      src="https://www.pump.fun/4inoptdokTnnH5cU64CP64WQbeV6gdFUVmiokPfwzbsL"
      width="100%"
      height="99vh"
      title="pump.fun"
      allow-popups={"true"}
      sandbox="allow-scripts allow-same-origin"
    ></iframe>
  );
};

export default IframeComponent;
