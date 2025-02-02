import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollToTop: React.FC = () => {
  const location = useLocation();
  const previousPathnameRef = useRef(location.pathname);

  useEffect(() => {
    const currentPathname = location.pathname;
    const previousPathname = previousPathnameRef.current;

    if (currentPathname !== previousPathname) {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }

        return;
      }

      window.scrollTo({ top: 0, behavior: "instant" });
    }

    previousPathnameRef.current = currentPathname;
  }, [location]);

  return null;
};

export default ScrollToTop;
