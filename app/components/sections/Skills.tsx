'use client';
import { presetSkills } from '@/lib/presets';
import { CustomEvent, InputData } from '@/lib/types';
import { ReactNode, useState } from 'react';
import Overlay from '../Overlay';

interface ISkillItemProp {
  children?: ReactNode;
}

function SkillItem({ children }: ISkillItemProp) {
  return <li className='w-1/3'>{children}</li>;
}

export default function Skills() {
  const [data, setData] = useState<InputData[]>(presetSkills);
  const handleOnSave = (e: CustomEvent) => {
    const newData = e.target.value;
    setData(newData);
  };

  return (
    <div className='flex flex-col gap-2.5'>
      <h5 className='border-b scroll-m-20 text-l font-semibold tracking-tight'>
        Skills
      </h5>
      <Overlay data={data} onSave={handleOnSave} withAdd withDelete>
        <ul className='flex flex-wrap list-disc pl-5 text-black/75'>
          {data.map((item, index) => {
            return <SkillItem key={index}>{item.value}</SkillItem>;
          })}
        </ul>
      </Overlay>
    </div>
  );
}
