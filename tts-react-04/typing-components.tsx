import React from "react";

// Solution 1 - interface and type benefit you by being exportable:
// export interface ButtonProps = {
//   className: string;
// }

// Solution 2 - interface and type benefit you by being exportable:
export type ButtonProps = {
  className: string;
}

export const Button = (props: ButtonProps) => {
  return <button className={props.className}></button>;
};

// Solution 3 - common:
// export const Button = (props: { className: string }) => {
//   return <button className={props.className}></button>;
// };

// Solution 4 - more common:
// export const Button = ({ className }: { className: string }) => {
//   return <button className={props.className}></button>;
// };

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};

// Original without types:
// export const Button = (props: unknown) => {
//     return <button className={props.className}></button>;
//   };
  
//   const Parent = () => {
//     return (
//       <>
//         {/* @ts-expect-error */}
//         <Button></Button>
  
//         <Button className="my-class"></Button>
//       </>
//     );
//   };
