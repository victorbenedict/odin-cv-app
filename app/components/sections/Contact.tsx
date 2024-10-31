'use client';
import { presetContact } from '@/lib/presets';
import { CustomEvent, InputData } from '@/lib/types';
import { ReactNode, useState } from 'react';
import Overlay from '../Overlay';

interface IContactItemProp {
  children?: ReactNode;
}

function ContactItem({ children }: IContactItemProp) {
  return <li className='w-1/2'>{children}</li>;
}

export default function Contact() {
  const [data, setData] = useState<InputData[]>(presetContact);

  const handleOnSave = (e: CustomEvent) => {
    setData(e.target.value);
  };

  return (
    <Overlay data={data} onSave={handleOnSave}>
      <ul className='flex flex-wrap list-disc pl-5 text-black/75'>
        {data.map((item, index) => {
          return <ContactItem key={index}>{item.value}</ContactItem>;
        })}
      </ul>
    </Overlay>
  );
}
