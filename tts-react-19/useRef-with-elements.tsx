import { useRef } from "react";

// Solution 1:
export const Component = () => {
  const ref = useRef<HTMLDivElement>(null);

//   Note: can hover over div below to see which HTMLElement is expected (HTMLDivElement here)
  return <div ref={ref} />;
};

// Solution 2 - if certain can not be null, use ! after null:
// export const Component = () => {
//     const ref = useRef<HTMLDivElement>(null!);
  
//     return <div ref={ref} />;
//   };

// Original problem:
// import { useRef } from "react";

// export const Component = () => {
//   const ref = useRef<HTMLDivElement>();

//   return <div ref={ref} />;
// };