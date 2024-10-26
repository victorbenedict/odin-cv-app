import ContactSection from './sections/ContactSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import NameSection from './sections/NameSection';
import SkillsSection from './sections/SkillsSection';

export default function ResumeLayout() {
  return (
    <div className='w-[956px] flex flex-col gap-5 py-12 px-14 shadow-md'>
      <NameSection />
      <ContactSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}
