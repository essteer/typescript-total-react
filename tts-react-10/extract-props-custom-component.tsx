// Problem is that NavBar is from an external library, but props are not exported,
// and you want to access them - how can this be done?
// Imagine NavBar is an external library!

export const NavBar = (props: {
    title: string;
    links: string[];
    children: React.ReactNode;
  }) => {
    return <div>Some content</div>;
  };

// Solution 1:
import React from "react";
// import { Equal, Expect } from "../helpers/type-utils";

type NavBarProps = React.ComponentProps<typeof NavBar>;

//   Original problem:
// import { Equal, Expect } from "../helpers/type-utils";
  
// type NavBarProps = unknown;
  
// type test = Expect<
//   Equal<
//     NavBarProps,
//       {
//         title: string;
//         links: string[];
//         children: React.ReactNode;
//       }
//     >
// >;