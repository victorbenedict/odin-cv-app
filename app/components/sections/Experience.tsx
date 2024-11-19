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
import { Textarea } from '@/components/ui/textarea';
import { presetExperience } from '@/lib/presets';
import { ExperienceData, InputData } from '@/lib/types';
import { generateId } from '@/lib/utils';
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { FiDelete } from 'react-icons/fi';

interface IEditExperienceProps {
  children: ReactNode;
  data: ExperienceData['data'];
  onSave?: (e: ExperienceData['data']) => void;
}

interface IExperienceCardProps {
  data: ExperienceData['data'];
  onSave?: (e: CustomEvent) => void;
}

function ExperienceCard({ data, onSave }: IExperienceCardProps) {
  const [companyName, position, location, date, contributions] = data.map(
    (value) => value
  );

  const contributionArr = Array.isArray(contributions.value)
    ? contributions.value
    : [contributions.value];

  const handleOnSave = (e: CustomEvent) => {
    onSave?.(e);
  };

  return (
    <li>
      <EditExperience data={data} onSave={handleOnSave}>
        <div>
          <div className='font-bold'>
            <span>{companyName.value}</span> | <span>{location.value}</span>
          </div>
          <div className='font-bold'>
            <span>{position.value}</span> | <span>{date.value}</span>
          </div>
          <ul className='list-disc pl-5'>
            {contributionArr.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </EditExperience>
    </li>
  );
}

export default function Experience() {
  const [data, setData] = useState<ExperienceData[]>(presetExperience);
  // console.log('Experience data', data);

  return (
    <div className='group'>
      <div className='flex justify-between items-end border-b scroll-m-20 text-l font-semibold tracking-tight'>
        <h5>Experience</h5>
        <Button
          variant='ghost'
          className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        >
          Add Experience
        </Button>
      </div>
      <ul className='flex flex-col gap-2.5 pt-2.5 text-black/75'>
        {data.map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              data={item.data}
              // onSave={(e) => handleOnSave(e, item.companyId)}
            />
          );
        })}
      </ul>
    </div>
  );
}

function EditExperience({ children, data, onSave }: IEditExperienceProps) {
  const [experience, setExperience] = useState<ExperienceData['data']>();
  const [open, setOpen] = useState(false);
  // console.log('EditExperience', experience);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const id = e.target.id;
    // const newValue = e.target.value;
    // setSkills((prev) =>
    //   prev.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    // );
  };
  // console.log('ExperienceCard', experience);
  // const handleOnSave = () => {
  //   onSave?.(experience);
  // };

  // const handleAdd = () => {
  //   setSkills((prev) => [...prev, { id: generateId(), label: '', value: '' }]);
  // };

  // const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const id = e.currentTarget.id;
  //   setSkills(skills.filter((item) => item.id != id));
  // };

  useEffect(() => {
    setExperience(data);
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
          <DialogTitle>Edit skills</DialogTitle>
          <DialogDescription>
            Make changes to your skills here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <ul className='grid gap-4 py-4'>
          {experience?.map((item, index) => {
            return (
              <li key={index} className='grid grid-cols-4 items-center gap-4'>
                {item.id !== 'contributions' ? (
                  <>
                    <Label htmlFor={item.id} className='col-span-1 text-right'>
                      {item.label}
                    </Label>
                    <Input
                      id={item.id}
                      className='col-span-3'
                      onChange={handleOnChange}
                      value={item.value}
                    />
                  </>
                ) : (
                  <>
                    <ContributionInput
                      id={item.id}
                      label={item.label}
                      data={item.value}
                    />
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <DialogFooter className='flex flex-row gap-2 justify-end'>
          <Button variant={'secondary'} onClick={() => {}}>
            Add Contribution
          </Button>
          <DialogClose asChild>
            <Button type='submit' onClick={() => {}}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

interface IContributionInputProps {
  id: string;
  label?: string;
  data: string | string[];
}

const ContributionInput = ({ id, label, data }: IContributionInputProps) => {
  const contributionArr = Array.isArray(data) ? data : [data];

  return (
    <>
      <Label htmlFor={id} className='col-span-1 text-right'>
        {label}
      </Label>
      {contributionArr.map((contribution) => {
        return (
          <>
            <Textarea
              id={contribution}
              className='col-span-2 col-end-4'
              // onChange={handleOnChange}
              // value={contribution}
              defaultValue={contribution}
            />
            <Button
              id={id}
              variant='ghost'
              size='icon'
              className='text-gray-600 col-span-1 text-center'
              // onClick={handleDelete}
            >
              <FiDelete />
            </Button>
          </>
        );
      })}
    </>
  );
};
