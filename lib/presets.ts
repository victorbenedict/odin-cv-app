import { ExperienceData, InputData } from './types';

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

export const presetExperience: ExperienceData[] = [
  {
    id: 'companyA',
    companyName: { id: 'companyName', label: 'Company', value: 'Company A' },
    position: { id: 'position', label: 'Position', value: 'Manager' },
    location: { id: 'location', label: 'Location', value: 'USA' },
    date: { id: 'date', label: 'Date', value: '2023 - 2024' },
    contribution: {
      id: 'contributions',
      label: 'Contributions',
      value: ['Contribution A', 'Contribution B'],
    },
  },
  {
    id: 'companyB',
    companyName: { id: 'companyName', label: 'Company', value: 'Company B' },
    position: { id: 'position', label: 'Position', value: 'Sales' },
    location: { id: 'location', label: 'Location', value: 'UK' },
    date: { id: 'date', label: 'Date', value: '2021 - 2023' },
    contribution: {
      id: 'contributions',
      label: 'Contributions',
      value: ['Contribution A', 'Contribution B'],
    },
  },
];
