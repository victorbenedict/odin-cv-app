'use client';
import { presetExperience } from '@/lib/presets';
import { ExperienceData } from '@/lib/types';
import { useState } from 'react';
import Overlay from '../Overlay';
import { generateId } from '@/lib/utils';

interface IExperienceProps {
  data: ExperienceData;
}

function ExperienceCard({ data }: IExperienceProps) {
  const {
    companyName: { value: companyName },
    location: { value: location },
    position: { value: position },
    date: { value: date },
    contribution: { value: contributions },
  } = data;
  const generatedId = generateId;
  const overlayData = [
    data.companyName,
    data.location,
    data.position,
    data.date,
    data.contribution,
  ].map((field) => ({
    id: `${field.id}${generatedId}`,
    label: field.label,
    value: field.value,
  }));

  return (
    <Overlay data={overlayData}>
      <li>
        <div className='font-bold'>
          <span>{companyName}</span> | <span>{location}</span>
        </div>
        <div className='font-bold'>
          <span>{position}</span> | <span>{date}</span>
        </div>
        <ul className='list-disc pl-5'>
          {contributions.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </li>
    </Overlay>
  );
}

export default function Experience() {
  const [data, setData] = useState<ExperienceData[]>(presetExperience);
  return (
    <div>
      <h5 className='border-b scroll-m-20 text-l font-semibold tracking-tight'>
        Experience
      </h5>
      <ul className='flex flex-col gap-2.5 pt-2.5 text-black/75'>
        {data.map((item, index) => {
          return <ExperienceCard key={index} data={item} />;
        })}
      </ul>
    </div>
  );
}
