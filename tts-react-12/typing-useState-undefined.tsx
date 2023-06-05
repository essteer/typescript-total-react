// Problem is how to type useState so that it can accept a typed and an undefined input

import { useEffect, useState } from "react";
// import { Equal, Expect } from "../helpers/type-utils";

interface Data {
  id: number;
  name: string;
}

const fetchData = () => {
  return Promise.resolve({ id: 1, name: "John" });
};

export const Component = () => {
    // Solution is here - undefined in () is optional:
  const [data, setData] = useState<Data | undefined>(undefined);

  useEffect(() => {
    fetchData().then((val) => {
      setData(val);
    });
  }, []);

//   type test = [Expect<Equal<typeof data, Data | undefined>>];
};

// Original problem:
// export const Component = () => {
//     const [data, setData] = useState();
  
//     useEffect(() => {
//       fetchData().then((val) => {
//         setData(val);
//       });
//     }, []);
  
//     type test = [Expect<Equal<typeof data, Data | undefined>>];
//   };