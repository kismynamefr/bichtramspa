import React from 'react';
import Link from 'next/link';

interface EffectButtonProps {
  title: string;
  href: string;
}

const EffectButton: React.FC<EffectButtonProps> = ({ title, href }) => {
  return (
    <div className="mt-8">
      <Link href={href}className='custom-btn-see text-white cursor-pointer'>{title}</Link>
    </div>
  );
};

export default EffectButton;
