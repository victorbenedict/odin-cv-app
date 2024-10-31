'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputData } from '@/lib/types';
import { ChangeEvent, useState } from 'react';

interface IInputFieldProps {
  data: InputData;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ data, onChange }: IInputFieldProps) {
  const [{ id, label, value }, setInputValue] = useState(data);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prevState) => ({ ...prevState, value: e.target.value }));
    if (onChange) {
      onChange(e);
    }
  };

  const inputCx = label ? 'col-span-3' : 'col-span-full';

  return (
    <div className='grid grid-cols-4 items-center gap-4'>
      {label && (
        <Label htmlFor={id} className='text-right'>
          {label}
        </Label>
      )}
      <Input
        className={inputCx}
        id={id}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}
