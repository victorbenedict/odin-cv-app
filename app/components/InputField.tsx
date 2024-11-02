'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputData } from '@/lib/types';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { MdOutlineDelete } from 'react-icons/md';

interface IInputFieldProps {
  data: InputData;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete?: (e: MouseEvent<HTMLButtonElement>) => void;
  withDelete?: boolean;
}

export default function InputField({
  data,
  onChange,
  onDelete,
  withDelete = false,
}: IInputFieldProps) {
  const [{ id, label, value }, setInputValue] = useState(data);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prevState) => ({ ...prevState, value: e.target.value }));
    if (onChange) {
      onChange(e);
    }
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    if (onDelete) {
      onDelete(e);
    }
  };

  const inputCx = label || withDelete ? 'col-span-3' : 'col-span-full';

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
      {withDelete && (
        <Button id={id} variant={'ghost'} size={'icon'} onClick={handleDelete}>
          <MdOutlineDelete className='text-red-600 h-4 w-4' />
        </Button>
      )}
    </div>
  );
}
