import React from "react";

interface Props {
  className: string;
}

// React.FC will be deprecated over time - Button = (props: Props) => will be the go-to
/* @ts-expect-error */
export const Button: React.FC<Props> = (props) => {
    return {
      ohDear: "123",
    };
  };

// /* @ts-expect-error */
// export const Button = (props: Props) => {
//   return {
//     ohDear: "123",
//   };
// };

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};