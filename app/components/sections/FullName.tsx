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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { presetName } from '@/lib/presets';
import { InputData } from '@/lib/types';
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';

interface IEditNameProps {
  children: ReactNode;
  data: InputData;
  onSave?: (e: string) => void;
}

export default function FullName() {
  const [data, setData] = useState<InputData>(presetName);

  const handleOnSave = (newName: string) => {
    console.log('handleOnChange', newName);
    setData((prev) => ({ ...prev, value: newName }));
  };

  return (
    <EditName data={data} onSave={handleOnSave}>
      <h2 className='scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0'>
        {data.value}
      </h2>
    </EditName>
  );
}

function EditName({ children, data, onSave }: IEditNameProps) {
  const [fullName, setFullName] = useState(presetName);
  const [open, setOpen] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName((prev: InputData) => ({ ...prev, value: e.target.value }));
  };

  const handleOnSave = () => {
    onSave?.(fullName.value);
  };

  useEffect(() => {
    setFullName(data);
  }, [open, data]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className='hover:bg-slate-100 hover:cursor-pointer rounded transition-colors duration-300'
        asChild
      >
        {children}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit Name</DialogTitle>
          <DialogDescription>
            Make changes to your full name here. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor={fullName.id} className='text-right'>
              {fullName.label}
            </Label>
            <Input
              id={fullName.id}
              className='col-span-3'
              onChange={handleOnChange}
              value={fullName.value}
            />
          </div>
        </div>
        <DialogFooter className='flex flex-row gap-2 justify-end'>
          <DialogClose asChild>
            <Button type='submit' onClick={handleOnSave}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
