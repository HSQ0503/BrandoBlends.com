import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainLogo = () => {
  return (
    <Link href="/" className="flex items-center -space-x-1">
        <Image
          src="/Images/Logos/MainLogo.png" 
          alt="BrandoBlends Logo"
          width={50} 
          height={50} 
        />
        <span className="merriweather text-[2.1rem] font-bold text-white" style={{ marginTop: '5px' }}>
          randoBlends
        </span>
    </Link>
  );
};

export default MainLogo;
