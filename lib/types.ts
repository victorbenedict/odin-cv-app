import { SyntheticEvent } from 'react';

export type CustomEvent = SyntheticEvent & { target: { value: InputData[] } };

export type InputData = {
  id: string;
  label?: string;
  value: string | string[];
};

export type ExperienceData = {
  id: string;
  companyName: InputData;
  position: InputData;
  location: InputData;
  date: InputData;
  contribution: InputData & { value: string[] };
};
