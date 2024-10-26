import { faker } from '@faker-js/faker';
import { ReactNode } from 'react';

interface IContactItemProp {
  children?: ReactNode;
}

function ContactItem({ children }: IContactItemProp) {
  return <li className='w-1/2'>{children}</li>;
}

export default function ContactSection() {
  const random = {
    email: faker.internet.email(),
    phone: faker.phone.number({ style: 'national' }),
    location: `${faker.location.city()}, ${faker.location.country()}`,
    linkedIn: `https://www.linkedin.com/in/${faker.string.alpha(5)}`,
    url: faker.internet.url(),
  };

  return (
    <ul className='flex flex-wrap list-disc pl-5 text-black/75'>
      <ContactItem>{random.email}</ContactItem>
      <ContactItem>{random.linkedIn}</ContactItem>
      <ContactItem>{random.phone}</ContactItem>
      <ContactItem>{random.url}</ContactItem>
      <ContactItem>{random.location}</ContactItem>
    </ul>
  );
}
