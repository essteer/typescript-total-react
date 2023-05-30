import React from 'react';

interface ButtonProps {
  className: string;
  children: React.ReactNode;
// Could use <HTMLElement> to be general rather than specific to buttons, 
// or remove <> entirely
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

// Original problem:
// import React from 'react';

// interface ButtonProps {
//   className: string;
//   children: React.ReactNode;
// }

// export const Button = ({ children, className, onClick }: ButtonProps) => {
//   return (
//     <button onClick={onClick} className={className}>
//       {children}
//     </button>
//   );
// };