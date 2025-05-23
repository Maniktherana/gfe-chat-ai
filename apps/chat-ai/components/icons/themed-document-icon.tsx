import type { SVGProps } from "react";

const ThemedDocumentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M1 0C0.44772 0 0 0.44772 0 1V17C0 17.5523 0.44772 18 1 18H19C19.5523 18 20 17.5523 20 17V1C20 0.44772 19.5523 0 19 0H1ZM2 16V2H18V16H2ZM12 4H4V6H12V4ZM16 12V14H8V12H16ZM14 8H6V10H14V8Z"
        fill="#C026D3"
      />
    </svg>
  );
};

export default ThemedDocumentIcon;
