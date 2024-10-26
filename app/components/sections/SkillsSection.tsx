import { ReactNode } from 'react';

interface ISkillItemProp {
  children?: ReactNode;
}

function SkillItem({ children }: ISkillItemProp) {
  return <li className='w-1/3'>{children}</li>;
}

export default function SkillsSection() {
  return (
    <div>
      <h5 className='border-b scroll-m-20 text-l font-semibold tracking-tight'>
        Skills
      </h5>
      <ul className='flex flex-wrap pt-2.5 list-disc pl-5 text-black/75'>
        <SkillItem>Skill A</SkillItem>
        <SkillItem>Skill B</SkillItem>
        <SkillItem>Skill C</SkillItem>
        <SkillItem>Skill D</SkillItem>
        <SkillItem>Skill E</SkillItem>
      </ul>
    </div>
  );
}
