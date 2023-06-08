import { useEffect } from "react";

// Solution 2:
export const useTimeout = (timerMs: number) => {
  useEffect(
    () => {
      const timeout = setTimeout(() => {
        console.log("Done!");
      }, timerMs);

      return () => {
        clearTimeout(timeout);
      };
    }, [timerMs]);
};

// Solution 1: wrap setTimeout in {}:
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/#useeffect--uselayouteffect
// export const useTimeout = (timerMs: number) => {
//   useEffect(
//     () => {
//       setTimeout(() => {
//         console.log("Done!");
//       }, timerMs);
//     }, [timerMs]);
// };

// Original problem:
// export const useTimeout = (timerMs: number) => {
//   useEffect(
//     () =>
//       setTimeout(() => {
//         console.log("Done!");
//       }, timerMs),
//     [timerMs],
//   );
// };