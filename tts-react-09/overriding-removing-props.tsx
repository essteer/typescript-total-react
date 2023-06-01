// Problem is to override the props of onChange so that we have only string, not the default props
import { ComponentProps } from "react";
// import { Equal, Expect } from "../helpers/type-utils";

// Solution 4 (reuseable type helper):
type OverrideProps<T, TOverriden> = Omit<T, keyof TOverriden> & TOverriden;

type InputProps = OverrideProps<
    ComponentProps<"input">, 
    {
        onChange: (value: string) => void
    }
>

// Solution 3 (extract out interface)
// interface InputProps extends Omit<ComponentProps<"input">, "onChange"> & { 
//     onChange: (value: string) => void 
// }

// Solution 2 (extract out type):
// type InputProps = Omit<ComponentProps<"input">, "onChange"> & { 
//     onChange: (value: string) => void 
// }

// Remaining code:
export const Input = (props: InputProps) => {
    return (
      <input
        {...props}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      ></input>
    );
  };

// Solution 1 (basic):
// export const Input = (
//     props: Omit<ComponentProps<"input">, "onChange"> & { onChange: (value: string) => void }
//   ) => {
//     return (
//       <input
//         {...props}
//         onChange={(e) => {
//           props.onChange(e.target.value);
//         }}
//       ></input>
//     );
//   };
  
  const Parent = () => {
    return (
      <Input
        onChange={(e) => {
          console.log(e);
  
        //   type test = Expect<Equal<typeof e, string>>;
        }}
      ></Input>
    );
  };

// Original problem:
// export const Input = (
//   props: ComponentProps<"input"> & { onChange: (value: string) => void }
// ) => {
//   return (
//     <input
//       {...props}
//       onChange={(e) => {
//         props.onChange(e.target.value);
//       }}
//     ></input>
//   );
// };

// const Parent = () => {
//   return (
//     <Input
//       onChange={(e) => {
//         console.log(e);

//         type test = Expect<Equal<typeof e, string>>;
//       }}
//     ></Input>
//   );
// };