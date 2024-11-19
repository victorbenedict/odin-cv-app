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
import { presetSkills } from '@/lib/presets';
import { InputData } from '@/lib/types';
import { generateId } from '@/lib/utils';
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { FiDelete } from 'react-icons/fi';

interface IEditSkillsProps {
  children: ReactNode;
  data: InputData[];
  onSave?: (e: InputData[]) => void;
}

export default function Skills() {
  const [data, setData] = useState<InputData[]>(presetSkills);
  const handleOnSave = (newData: InputData[]) => {
    setData(newData);
  };

  return (
    <div className='flex flex-col gap-2.5'>
      <h5 className='border-b scroll-m-20 text-l font-semibold tracking-tight'>
        Skills
      </h5>
      <EditSkills data={data} onSave={handleOnSave}>
        <ul className='flex flex-wrap list-disc pl-5 text-black/75'>
          {data.map((item) => {
            return (
              <li key={item.id} className='w-1/3'>
                {item.value}
              </li>
            );
          })}
        </ul>
      </EditSkills>
    </div>
  );
}

function EditSkills({ children, data, onSave }: IEditSkillsProps) {
  const [skills, setSkills] = useState(presetSkills);
  const [open, setOpen] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const newValue = e.target.value;
    setSkills((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    );
  };

  const handleOnSave = () => {
    onSave?.(skills);
  };

  const handleAdd = () => {
    setSkills((prev) => [...prev, { id: generateId(), label: '', value: '' }]);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    setSkills(skills.filter((item) => item.id != id));
  };

  useEffect(() => {
    setSkills(data);
  }, [open, data]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className='hover:bg-slate-100 hover:cursor-pointer rounded transition-colors duration-300'
        asChild
      >
        {skills.length > 0 ? (
          children
        ) : (
          <Button className='hover:bg-black/80'>Add Skill</Button>
        )}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit skills</DialogTitle>
          <DialogDescription>
            Make changes to your skills here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <ul className='grid gap-4 py-4'>
          {skills.map((item, index) => {
            return (
              <li key={index} className='flex gap-4'>
                <Input
                  id={item.id}
                  onChange={handleOnChange}
                  value={item.value}
                />
                <Button
                  id={item.id}
                  variant='ghost'
                  size='icon'
                  className='text-gray-600 text-center'
                  onClick={handleDelete}
                >
                  <FiDelete />
                </Button>
              </li>
            );
          })}
        </ul>
        <DialogFooter className='flex flex-row gap-2 justify-end'>
          <Button variant={'secondary'} onClick={handleAdd}>
            Add
          </Button>
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
