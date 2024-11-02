import { EditForm, IFormProps } from './Forms';

export default function Overlay({
  children,
  data,
  onSave,
  withAdd = false,
  withDelete = false,
}: IFormProps) {
  return (
    <EditForm
      data={data}
      onSave={onSave}
      withAdd={withAdd}
      withDelete={withDelete}
    >
      <div className='hover:bg-slate-200 cursor-pointer'>{children}</div>
    </EditForm>
  );
}
