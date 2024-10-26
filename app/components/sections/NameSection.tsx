import { faker } from '@faker-js/faker';

export default function NameSection() {
  const randomName = faker.person.fullName();

  return (
    <h2 className='scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0'>
      {randomName}
    </h2>
  );
}
