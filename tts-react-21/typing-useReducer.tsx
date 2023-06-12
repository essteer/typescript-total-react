// Solutions 1 & 2 import:
import { useReducer } from "react";
// import { Equal, Expect } from "../helpers/type-utils";

// Solution 1 (interface and type destructuring):
// export type reducerState = {
//     count: number;
// }

// export type reducerAction =
//     | {
//         type: "add";
//         add: number;
//     }
//     | {
//         type: "subtract";
//         subtract: number;
//     }

// const reducer = (state: State, action: Action) => {
//     switch (action.type) {
//       case "add":
//         return { count: state.count + action.add };
//       case "subtract":
//         return { count: state.count - action.subtract };
//       default:
//         throw new Error();
//     }
//   };

// Solution 2 (on const reducer alone):
const reducer = (
    state: {
        count: number;
    }, 
    action: 
    | {
        type: "add";
        add: number;
    }
    | {
        type: "subtract";
        subtract: number;
    }
    ) => {
    switch (action.type) {
      case "add":
        return { count: state.count + action.add };
      case "subtract":
        return { count: state.count - action.subtract };
      default:
        throw new Error();
    }
  };

// Solution 3 import:
// import { Reducer, useReducer } from "react";

// const reducer: Reducer<ReducerState, ReducerAction> = (state, action) => {
//   switch (action.type) {
//     case "add":
//       return { count: state.count + action.add };
//     case "subtract":
//       return { count: state.count - action.subtract };
//     default:
//       throw new Error();
//   }
// };


//   Residual code (all):
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  // type tests = [Expect<Equal<typeof state.count, number>>];
  
  dispatch({ type: "add", add: 1 });
    // @ts-expect-error
  dispatch({ type: "SUBTRACT", subtract: 1 });
    // @ts-expect-error
  dispatch({ type: "add" });
    // @ts-expect-error
  dispatch({ type: "subtract", subtract: "123" });

// Original problem:
// const reducer = (state: unknown, action: unknown) => {
//   switch (action.type) {
//     case "add":
//       return { count: state.count + action.add };
//     case "subtract":
//       return { count: state.count - action.subtract };
//     default:
//       throw new Error();
//   }
// };

// const [state, dispatch] = useReducer(reducer, { count: 0 });

// // type tests = [Expect<Equal<typeof state.count, number>>];

// dispatch({ type: "add", add: 1 });

// // @ts-expect-error
// dispatch({ type: "SUBTRACT", subtract: 1 });

// // @ts-expect-error
// dispatch({ type: "add" });

// // @ts-expect-error
// dispatch({ type: "subtract", subtract: "123" });