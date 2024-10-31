import { SyntheticEvent } from 'react';

export type InputData = {
  id: string;
  label?: string;
  value: string;
};

export type CustomEvent = SyntheticEvent & { target: { value: InputData[] } };
