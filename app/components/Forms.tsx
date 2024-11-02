'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { CustomEvent, InputData } from '@/lib/types';
import { ChangeEvent, MouseEvent, ReactNode, useEffect, useState } from 'react';
import InputField from './InputField';
import { generateId } from '@/lib/utils';

export interface IFormProps {
  children?: ReactNode;
  data: InputData[];
  onSave?: (e: CustomEvent) => void;
  withAdd?: boolean;
  withDelete?: boolean;
  AddOnly?: boolean;
}

export function EditForm({
  data,
  children,
  onSave,
  withAdd = false,
  withDelete = false,
  AddOnly = false,
}: IFormProps) {
  const [entry, setEntry] = useState<InputData[]>(data);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const id = e.target.id;
    setEntry((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      )
    );
  };

  const handleOnSave = () => {
    if (onSave) {
      const mockEvent = {
        target: { value: entry },
      } as CustomEvent;
      onSave(mockEvent);
    }
  };

  const handleAdd = () => {
    setEntry((prevData) => {
      return [...prevData, { id: generateId, value: '' } as InputData];
    });
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    setEntry((prevData) => prevData.filter((item) => item.id !== id));
  };

  useEffect(() => {
    console.log(entry);
  }, [entry]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='overflow-y-auto max-h-[75vh]'>
        <DialogHeader>
          <DialogTitle>Edit Form</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          {entry.map((item) => {
            return (
              <InputField
                key={item.id}
                data={item}
                onChange={handleOnChange}
                onDelete={handleDelete}
                withDelete={withDelete}
              />
            );
          })}
        </div>
        <DialogFooter>
          {withAdd && (
            <Button variant={'outline'} onClick={handleAdd}>
              Add
            </Button>
          )}
          <DialogClose asChild>
            <Button type='submit' onClick={handleOnSave}>
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
