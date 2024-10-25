import ResumeLayout from './components/ResumeLayout';

export default function Home() {
  return (
    <>
      <header className='py-5 bg-stone-200 text-center'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Resume Generator
        </h1>
      </header>
      <div className='flex justify-center'>
        <ResumeLayout />
      </div>
    </>
  );
}
