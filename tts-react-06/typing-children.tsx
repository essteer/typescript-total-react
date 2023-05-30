// Solution 1:
import React from "react";

export const Button = (props: { children: React.ReactNode }) => {
  return <button>{props.children}</button>;
}

// Solution 2:
// import React, { FC, ReactNode } from 'react';

// type ChildProps = { 
//   children: ReactNode; 
// };

// export const Button: FC<ChildProps> = (props: ChildProps) => {
//   return <button>{props.children}</button>;
// };

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};

// Original problem:
// import React from 'react';

// export const Button = (props: {}) => {
//     return <button>{props.children}</button>;
//   };
  
//   const Parent = () => {
//     return (
//       <>
//         {/* @ts-expect-error */}
//         <Button></Button>
//         <Button>Hello world!</Button>
//       </>
//     );
//   };