import { SyntheticEvent } from 'react';

export type CustomEvent = SyntheticEvent & { target: { value: string } };

export type InputData = {
  id: string;
  label?: string;
  value: string;
};

export type ExperienceData = {
  companyId: string;
  data: {
    id: string;
    label?: string;
    value: string | string[];
  }[];
};
