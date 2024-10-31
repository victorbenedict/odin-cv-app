'use client';
import { presetName } from '@/lib/presets';
import { CustomEvent, InputData } from '@/lib/types';
import { useState } from 'react';
import Overlay from '../Overlay';

export default function FullName() {
  const [data, setData] = useState<InputData>(presetName);

  const handleOnSave = (e: CustomEvent) => {
    const newData = e.target.value[0];
    setData(newData);
  };

  return (
    <Overlay data={[data]} onSave={handleOnSave}>
      <h2 className='scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0'>
        {data.value}
      </h2>
    </Overlay>
  );
}
