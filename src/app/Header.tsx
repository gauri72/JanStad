'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[100px]">
      <div className="h-full">
        <div className={`h-full flex items-center justify-center rounded-b-[20px] shadow-lg transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md' 
            : 'bg-white'
        }`}>
          {/* Logo */}
          <Link href="#hero" className="flex items-center group p-[10px]">
            <div className="relative w-[250px] h-[250px] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Image
                src="/images/logo.png"
                alt="JanStad Logo"
                fill
                className="object-contain drop-shadow-lg"
                sizes="80px"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 