// import React from 'react';
// import { useController } from 'react-hook-form';

// type Props = {
// };

// const Input = ({ name, control, rules, id, label, ...props }: Props) => {
//   const { field, fieldState: { error } } = useController({ name, control, rules });

//   return (
//     <div>
//       <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
//         {label}
//       </label>
//       <div className="mt-2">
//         <input
//           id={id}
//           type="text"  {/* Assuming it's a text input, update accordingly */}
//           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
//           {...field}
//           {...props}
//         />
//         {error && (
//           {/* Use curly braces for comments in JSX */}
//           <span className='text-red-400 text-sm'>{error.message}</span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Input;
