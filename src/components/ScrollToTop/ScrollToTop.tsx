import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollToTop: React.FC = () => {
  const location = useLocation();
  const previousPathnameRef = useRef(location.pathname);

  useEffect(() => {
    const currentPathname = location.pathname;
    const previousPathname = previousPathnameRef.current;

    if (location.hash && currentPathname !== previousPathname) {
      setTimeout(() => {
        window.scrollBy({
          top: -100,
          behavior: "smooth",
        });
      });
    }

    previousPathnameRef.current = currentPathname;
  }, [location]);

  return null;
};

export default ScrollToTop;
