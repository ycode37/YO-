import React, { useContext, useRef } from 'react';
import { NavbarColorContext, NavbarContext } from '../../context/NavContext';

const Navbar = () => {
  const navGreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const [navColor, setNavColor] = useContext(NavbarColorContext);

  return (
    <div className="z-4 flex fixed top-0 w-full items-start justify-between">
      <div className="lg:p-5 p-2 ">
        <div className="lg:w-36 w-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 80"
            fill={navColor}
          >
            {/* Y */}
            <path
              d="
    M10 0 
    L30 0 
    L50 30 
    L70 0 
    L90 0 
    L60 40 
    L60 80 
    L40 80 
    L40 40 
    Z
  "
            />

            {/* 0 */}
            <path
              d="
    M110 10 
    Q110 0 120 0 
    L160 0 
    Q170 0 170 10 
    L170 70 
    Q170 80 160 80 
    L120 80 
    Q110 80 110 70 
    Z

    M130 20 
    L150 20 
    L150 60 
    L130 60 
    Z
  "
            />

            {/* 3 */}
            <path
              d="
    M190 0 
    L225 0 
    Q240 0 240 15 
    Q240 30 225 30 

    Q240 30 240 45 
    Q240 60 225 60 
    L190 60 

    L190 45 
    L220 45 
    Q225 45 225 40 
    Q225 35 220 35 
    L190 35 

 
  "
            />
          </svg>
        </div>
      </div>
      <div
        onClick={() => {
          setNavOpen(true);
        }}
        onMouseEnter={() => {
          navGreenRef.current.style.height = '100%';
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = '0%';
        }}
        className="lg:h-16 h-10 bg-black relative lg:w-[16vw] w-48"
      >
        <div
          ref={navGreenRef}
          className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"
        ></div>
        <div className="relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5">
          <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
          <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
