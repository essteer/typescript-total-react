// Problem is to fix code so that ref.current does not error as read only
import { useRef } from "react";

// Solution 1 - add | null to generic type argument (after string here) to make it mutable:
export const Component = () => {
  const ref = useRef<string | null>(null);

  // Why is this not allowed?
  ref.current = "Hello";

  return null;
};

// Original problem:
// export const Component = () => {
//   const ref = useRef<string>(null);

//   // Why is this not allowed?
//   ref.current = "Hello";

//   return null;
// };