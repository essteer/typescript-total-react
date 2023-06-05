// Type the useState so that tag.id and tag.value are typed for the empty array []
import { useState } from "react";

// Solution 2 - extracting type:
type Tag = {
    id: number,
    value: string
}

export const Tags = () => {
    const [tags, setTags] = useState<Tag[]>([]);

    //   Solution 1 - useState<{}>:
//   const [tags, setTags] = useState<{
//     id: number,
//     value: string,
//   }[]
//   >([]);
  return (
    <div>
      {tags.map((tag) => {
        return <div key={tag.id}>{tag.value}</div>;
      })}
      <button
        onClick={() => {
          setTags([
            ...tags,
            {
              id: new Date().getTime(),
              value: "New",
            },
          ]);
        }}
      >
        Add Tag
      </button>
    </div>
  );
};

// Original problem:
// export const Tags = () => {
//     const [tags, setTags] = useState([]);
//     return (
//       <div>
//         {tags.map((tag) => {
//           return <div key={tag.id}>{tag.value}</div>;
//         })}
//         <button
//           onClick={() => {
//             setTags([
//               ...tags,
//               {
//                 id: new Date().getTime(),
//                 value: "New",
//               },
//             ]);
//           }}
//         >
//           Add Tag
//         </button>
//       </div>
//     );
//   };