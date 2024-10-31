import { EditForm, IFormProps } from './Forms';

export default function Overlay({
  children,
  data,
  onSave,
  withAdd = false,
}: IFormProps) {
  return (
    <EditForm data={data} onSave={onSave} withAdd={withAdd}>
      <div className='hover:bg-slate-200 cursor-pointer'>{children}</div>
    </EditForm>
  );
}
