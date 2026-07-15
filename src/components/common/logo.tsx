import { JSX, SVGProps } from "react";

// CE monogram: a squared C frame of three bars plus a detached middle module
// sliding into place — the E completes as the module docks. Echoes the site's
// modular-construction identity. The frame inherits the svg fill (set via
// className, e.g. fill-foreground); the module is always circuit green.
export const Logo = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Carlos Escudero" {...props}>
    <path d="M5 5h17v4.5H9.5v13H22V27H5V5z" />
    <rect x="14" y="13.75" width="13" height="4.5" className="fill-circuit" />
  </svg>
);
