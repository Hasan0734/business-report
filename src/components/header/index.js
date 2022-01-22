import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiRotaryPhone } from 'react-icons/gi';
import logo from '/public/logoc.png';
import Mobile from '../menus/Mobile';
import Desktop from '../menus/Desktop';

export default function Header() {
  const [fixed, setFixed] = useState(false);
  const [toggle, setToggle] = useState(false);

  const headerRef = useRef(null);

  return (
    <>
      <header className='block sm:hidden'>
        <Desktop />
      </header>
      {/* mobile menu */}
      <Mobile className='hidden lg:block' />
    </>
  );
}
