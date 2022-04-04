import { useEffect } from "react";

// It allows the user to close the menu by clicking anywhere else on the page.
export const OnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      // Add click listeners to the menu on the sidebar
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
