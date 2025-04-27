import type { SVGProps } from "react";

const BarsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M0.666687 9.00008H2.33335V16.5001H0.666687V9.00008ZM3.16669 10.6667H4.83335V16.5001H3.16669V10.6667ZM12.3334 5.66675H14V16.5001H12.3334V5.66675ZM14.8334 7.33342H16.5V16.5001H14.8334V7.33342ZM6.50002 0.666748H8.16669V16.5001H6.50002V0.666748ZM9.00002 2.33341H10.6667V16.5001H9.00002V2.33341Z"
        fill="#404040"
      />
    </svg>
  );
};

export default BarsIcon;
