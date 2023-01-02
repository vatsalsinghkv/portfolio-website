import React from 'react';

type Props = {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  id?: string;
};

const Wrapper: React.FC<Props> = ({
  children,
  tag = 'section',
  className = '',
  id = '',
}: Props) => {
  const CustomTag = tag;

  return (
    <CustomTag id={id} className={`py-24 md:py-32 ${className}`}>
      {children}
    </CustomTag>
  );
};

export default Wrapper;
