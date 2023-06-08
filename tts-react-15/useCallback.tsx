import { useCallback } from "react";
// import { Equal, Expect } from "../helpers/type-utils";

// Solution 2 (less clean that Solution 1):
export const Buttons = (props: { id: string }) => {
    const onClick = useCallback<(buttonName: string) => void >(
      (buttonName: string) => {
        console.log(props.id, buttonName);
      },
      [props.id],
    );
  
    // type test = Expect<Equal<typeof onClick, (buttonName: string) => void>>;
  
    return (
      <div>
        <button onClick={() => onClick("A")}>A</button>
        <button onClick={() => onClick("B")}>B</button>
        <button onClick={() => onClick("C")}>C</button>
      </div>
    );
  };

// // Solution 1:
// export const Buttons = (props: { id: string }) => {
//     const onClick = useCallback(
//       (buttonName: string) => {
//         console.log(props.id, buttonName);
//       },
//       [props.id],
//     );
  
//     // type test = Expect<Equal<typeof onClick, (buttonName: string) => void>>;
  
//     return (
//       <div>
//         <button onClick={() => onClick("A")}>A</button>
//         <button onClick={() => onClick("B")}>B</button>
//         <button onClick={() => onClick("C")}>C</button>
//       </div>
//     );
//   };

// Original problem:
// export const Buttons = (props: { id: string }) => {
//   const onClick = useCallback<string>(
//     (buttonName) => {
//       console.log(props.id, buttonName);
//     },
//     [props.id],
//   );

//   type test = Expect<Equal<typeof onClick, (buttonName: string) => void>>;

//   return (
//     <div>
//       <button onClick={() => onClick("A")}>A</button>
//       <button onClick={() => onClick("B")}>B</button>
//       <button onClick={() => onClick("C")}>C</button>
//     </div>
//   );
// };