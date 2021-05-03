import { useEffect } from "react";

export default function HiddenH1AndPreCode() {
  useEffect(() => {
    document.querySelector("h1").setAttribute("aria-hidden", "true");
    document.querySelector("pre").setAttribute("aria-hidden", "true");
    document.querySelector("code").setAttribute("aria-hidden", "true");
  }, []);

  return null;
}
