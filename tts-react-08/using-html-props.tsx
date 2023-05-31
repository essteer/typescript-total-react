// Problem is how to carry over autocomplete and default attributes of an HTML button, to a React button
import React from "react";

// // Solution 1:
// // Hovering over <button below gives us:
// // React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>)
// // But we don't need all of this, can reduce to React.ButtonHTMLAttributes<HTMLButtonElement>
// export const Button = ({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
//   return (
//     <button {...rest} className={`default-classname ${className}`}></button>
//   );
// };

// const Parent = () => {
//   return <Button onClick={() => {}} type="button"></Button>;
// };

// Solution 2 (optimal):
// Using React.ComponentProps is less verbose
// ComponentProps allows us to pass a native type to an HTML element
export const Button = ({ className, ...rest }: React.ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};

// Original problem:
// import React from "react";

// export const Button = ({ className, ...rest }: {}) => {
//   return (
//     <button {...rest} className={`default-classname ${className}`}></button>
//   );
// };

// const Parent = () => {
//   return <Button onClick={() => {}} type="button"></Button>;
// };