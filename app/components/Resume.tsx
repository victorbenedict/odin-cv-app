import Contact from './sections/Contact';
import FullName from './sections/Name';
import Skills from './sections/Skills';

export default function Resume() {
  return (
    <div className='flex justify-center'>
      <div className='w-[956px] flex flex-col gap-5 py-12 px-14 shadow-md'>
        <FullName />
        <Contact />
        <Skills />
      </div>
    </div>
  );
}
