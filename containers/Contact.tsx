import React from 'react';
import { Button, Wrapper } from '../components';
import { getId } from '../utils/helper';
import { contactSection } from '../utils/portfolio';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center  !py-16 md:!py-24 mb-20 md:mb-32"
    >
      <p className="text-accent text-sm capitalize mb-3 font-mono">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph) => (
        <p key={getId()}>{paragraph}</p>
      ))}

      <Button type="link" size="lg" href={link} center className="mt-12">
        Say Hello
      </Button>
    </Wrapper>
  );
};

export default Contact;
