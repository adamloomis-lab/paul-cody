import { useEffect } from "react";
import { useLocation } from "wouter";

// Wouter doesn't scroll to top on navigation by default. Reset on every path change.
export default function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}
