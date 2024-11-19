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
import { presetContact } from '@/lib/presets';
import { InputData } from '@/lib/types';
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';

interface IEditContactProps {
  children: ReactNode;
  data: InputData[];
  onSave?: (e: InputData[]) => void;
}

export default function Contact() {
  const [data, setData] = useState<InputData[]>(presetContact);

  const handleOnSave = (e: InputData[]) => {
    setData(e);
  };

  return (
    <EditContact data={data} onSave={handleOnSave}>
      <ul className='flex flex-wrap list-disc pl-5 text-black/75'>
        {data.map((item) => {
          return (
            <li key={item.id} className='w-1/2'>
              {item.value}
            </li>
          );
        })}
      </ul>
    </EditContact>
  );
}

function EditContact({ children, data, onSave }: IEditContactProps) {
  const [contact, setContact] = useState(presetContact);
  const [open, setOpen] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const newValue = e.target.value;
    setContact((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    );
  };

  const handleOnSave = () => {
    onSave?.(contact);
  };

  useEffect(() => {
    setContact(data);
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
          <DialogTitle>Edit contact details</DialogTitle>
          <DialogDescription>
            Make changes to your contact details here. Click save when
            you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <ul className='grid gap-4 py-4'>
          {contact.map((item, index) => {
            return (
              <li key={index} className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor={item.id} className='text-right'>
                  {item.label}
                </Label>
                <Input
                  id={item.id}
                  className='col-span-3'
                  onChange={handleOnChange}
                  value={item.value}
                />
              </li>
            );
          })}
        </ul>
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
