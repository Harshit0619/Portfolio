import { PropsWithChildren, useEffect } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStackNew from "./TechStackNew";
import CallToAction from "./CallToAction";
import { setAllTimeline } from "./utils/GsapScroll";
import setSplitText from "./utils/splitText";

const MainContainer = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const applyScrollMode = (width: number) => {
      const compact = width <= 1024;
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = compact ? "auto" : "hidden";
      document.body.style.height = compact ? "auto" : "";
      document.body.style.minHeight = compact ? "100vh" : "";
      document.body.style.position = compact ? "static" : "";
      document.body.style.touchAction = compact ? "auto" : "";
      document.documentElement.style.overflowX = "hidden";
      document.documentElement.style.overflowY = compact ? "auto" : "";
      document.documentElement.style.height = compact ? "auto" : "";
      document.documentElement.style.minHeight = compact ? "100vh" : "";
      document.documentElement.style.touchAction = compact ? "auto" : "";
    };

    const resizeHandler = () => {
      const width = window.innerWidth;
      applyScrollMode(width);
      setSplitText();
      if (width <= 1024) {
        setAllTimeline();
      }
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      document.body.style.overflowY = "";
      document.body.style.height = "";
      document.body.style.minHeight = "";
      document.body.style.position = "";
      document.body.style.touchAction = "";
      document.documentElement.style.overflowY = "";
      document.documentElement.style.height = "";
      document.documentElement.style.minHeight = "";
      document.documentElement.style.touchAction = "";
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {children}
      <div className="container-main">
        <Landing />
        <About />
        <WhatIDo />
        <Career />
        <Work />
        <TechStackNew />
        <CallToAction />
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
