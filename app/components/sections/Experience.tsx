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

interface IContributionInputProps {
  id: string;
  label?: string;
  data: string | string[];
  onChange?: (e: string[]) => void;
}

interface IEditExperienceProps {
  children: ReactNode;
  data: ExperienceData['data'];
  onSave?: (e: ExperienceData['data']) => void;
}

interface IExperienceCardProps {
  data: ExperienceData['data'];
  onSave?: (e: ExperienceData['data']) => void;
}

const ContributionInput = ({
  id,
  label,
  data,
  onChange,
}: IContributionInputProps) => {
  const [contributions, setContributions] = useState(
    Array.isArray(data) ? data : [data]
  );
  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newValue = e.target.value;
    setContributions(
      contributions.map((item, i) => (i === index ? newValue : item))
    );
    handleOnChange();
  };

  const handleOnDelete = (index: number) => {
    setContributions((prev) => prev.filter((_, i) => i !== index));
    handleOnChange();
  };

  const handleOnChange = () => {
    onChange?.(contributions);
  };

  useEffect(() => {
    setContributions(Array.isArray(data) ? data : [data]);
  }, [data]);

  return (
    <div className='col-span-4 flex gap-2'>
      <Label htmlFor={id} className=''>
        {label}
      </Label>
      <div className='flex flex-col w-full gap-2'>
        {contributions.map((contribution, index) => {
          return (
            <div key={index} className='flex'>
              <Textarea
                id={contribution}
                className=''
                onChange={(e) => handleInputChange(e, index)}
                value={contribution}
              />
              <Button
                id={id}
                variant='ghost'
                size='icon'
                className='text-gray-600 text-center'
                onClick={(e) => handleOnDelete(index)}
              >
                <FiDelete />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function EditExperience({ children, data, onSave }: IEditExperienceProps) {
  const [experience, setExperience] = useState<ExperienceData['data']>([
    { id: '', value: '', label: '' },
  ]);
  const [open, setOpen] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const newValue = e.target.value;
    setExperience(
      experience?.map((prev) =>
        prev.id === id ? { ...prev, value: newValue } : prev
      )
    );
  };

  const handleOnSave = () => {
    onSave?.(experience);
  };

  // const handleAdd = () => {
  //   setSkills((prev) => [...prev, { id: generateId(), label: '', value: '' }]);
  // };

  // const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const id = e.currentTarget.id;
  //   setSkills(skills.filter((item) => item.id != id));
  // };

  const handleContributionChange = (e: string[]) => {
    setExperience(
      experience?.map((item) =>
        item.id === 'contributions' ? { ...item, value: e } : item
      )
    );
  };

  const handleAddContribution = () => {
    setExperience(
      experience?.map((prev) =>
        prev.id === 'contributions'
          ? { ...prev, value: [...prev.value, ''] }
          : prev
      )
    );
  };

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
                      onChange={handleInputChange}
                      value={item.value}
                    />
                  </>
                ) : (
                  <>
                    <ContributionInput
                      id={item.id}
                      label={item.label}
                      data={item.value}
                      onChange={handleContributionChange}
                    />
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <DialogFooter className='flex flex-row gap-2 justify-end'>
          <Button variant={'secondary'} onClick={handleAddContribution}>
            Add Contribution
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

function ExperienceCard({ data, onSave }: IExperienceCardProps) {
  const [companyName, position, location, date, contributions] = data.map(
    (value) => value
  );

  const contributionArr = Array.isArray(contributions.value)
    ? contributions.value
    : [contributions.value];

  const handleOnSave = (e: ExperienceData['data']) => {
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
  const handleOnSave = (e: ExperienceData['data'], id: string) => {
    setData(
      data.map((prev) => (prev.companyId === id ? { ...prev, data: e } : prev))
    );
  };

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
              onSave={(e) => handleOnSave(e, item.companyId)}
            />
          );
        })}
      </ul>
    </div>
  );
}
