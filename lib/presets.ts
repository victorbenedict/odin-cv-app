import { InputData } from './types';

export const presetName: InputData = {
  id: 'fullname',
  label: 'Full name',
  value: 'Full name',
};

export const presetContact: InputData[] = [
  { id: 'email', label: 'Email', value: 'Declan_Kutch@yahoo.com' },
  {
    id: 'phone',
    label: 'Phone',
    value: '(837) 429-6018',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Port Lucileland, Saint Martin',
  },
  {
    id: 'linkedIn',
    label: 'LinkedIn',
    value: `https://www.linkedin.com/in/ywibJ`,
  },
  { id: 'url', label: 'URL', value: 'https://earnest-vein.net' },
];

export const presetSkills: InputData[] = Array.from(
  { length: 6 },
  (_, index) => {
    return {
      id: `skill${index}`,
      value: `Skill ${String.fromCharCode(index + 65)}`,
    };
  }
);
