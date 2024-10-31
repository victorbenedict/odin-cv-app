// import React from 'react';

// type EducationData = {
//   name?: string;
//   location?: string;
//   field?: string;
//   graduationDate?: string;
//   contributions?: string[];
// };

// interface IEducationProps {
//   data: EducationData;
// }

// function Education({ data }: IEducationProps) {
//   return (
//     <InteractiveBox>
//       <li>
//         <div className='font-bold'>
//           <span>{data.name}</span> | <span>{data.location}</span>
//         </div>
//         <div className='font-bold'>
//           <span>{data.field}</span> | <span>{data.graduationDate}</span>
//         </div>
//         {data.contributions && (
//           <ul>
//             {data.contributions.map((item, index) => {
//               return <li key={index}>{item}</li>;
//             })}
//           </ul>
//         )}
//       </li>
//     </InteractiveBox>
//   );
// }

// export default function EducationSection() {
//   const data: EducationData[] = [
//     {
//       name: 'Education A',
//       location: 'Germany',
//       field: 'Business',
//       graduationDate: '2020',
//     },
//   ];
//   return (
//     <div>
//       <InteractiveBox>
//         <h5 className='border-b scroll-m-20 text-l font-semibold tracking-tight'>
//           Education
//         </h5>
//       </InteractiveBox>
//       <ul className='flex flex-col gap-2.5 pt-2.5 text-black/75'>
//         {data.map((item, index) => {
//           return <Education key={index} data={item} />;
//         })}
//       </ul>
//     </div>
//   );
// }
