import React from 'react';
import Image from 'next/image';

const MainLogo = () => {
  return (
    <div className="flex items-center -space-x-1">
      <Image
        src="/Images/Logos/MainLogo.png" 
        alt="BrandoBlends Logo"
        width={50} 
        height={50} 
      />
      <span className="merriweather text-[2.1rem] font-bold text-white" style={{ marginTop: '5px' }}>
        randoBlends
      </span>
    </div>
  );
};

export default MainLogo;
