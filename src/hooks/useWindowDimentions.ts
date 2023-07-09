import { useState, useEffect } from "react";
import { getWindowDimensions } from "@/helpers/util";

export default function useWindowDimensions() {//custom hook to capture when the window width is being resized
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  