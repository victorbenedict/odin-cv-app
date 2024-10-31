// import React from 'react';

// type ExperienceData = {
//   name: string;
//   position: string;
//   location: string;
//   date: string;
//   contribution: string[];
// };

// interface IExperienceProps {
//   data: ExperienceData;
// }

// function Experience({ data }: IExperienceProps) {
//   return (
//     <InteractiveBox>
//       <li>
//         <div className='font-bold'>
//           <span>{data.name}</span> | <span>{data.location}</span>
//         </div>
//         <div className='font-bold'>
//           <span>{data.position}</span> | <span>{data.date}</span>
//         </div>
//         <ul className='list-disc pl-5'>
//           {data.contribution.map((item, index) => {
//             return <li key={index}>{item}</li>;
//           })}
//         </ul>
//       </li>
//     </InteractiveBox>
//   );
// }

// export default function Experience() {
//   const data: ExperienceData[] = [
//     {
//       name: 'Company A',
//       position: 'Manager',
//       location: 'USA',
//       date: '2023 - 2024',
//       contribution: ['Contribution A', 'Contribution B'],
//     },
//     {
//       name: 'Company B',
//       position: 'Sales',
//       location: 'UK',
//       date: '2021 - 2023',
//       contribution: ['Contribution A', 'Contribution B'],
//     },
//   ];
//   return (
//     <div>
//         <h5 className='border-b scroll-m-20 text-l font-semibold tracking-tight'>
//           Experience
//         </h5>
//       <ul className='flex flex-col gap-2.5 pt-2.5 text-black/75'>
//         {data.map((item, index) => {
//           return <Experience key={index} data={item} />;
//         })}
//       </ul>
//     </div>
//   );
// }
