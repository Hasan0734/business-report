import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiRotaryPhone } from 'react-icons/gi';
import logo from '/public/logoc.png';

export default function Header() {
  const [fixed, setFixed] = useState(false);
  const [toggle, setToggle] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    let height = headerRef.current.getBoundingClientRect().height;
    window.addEventListener('scroll', () => {
      if (window.scrollY > height) {
        setFixed(true);
      } else setFixed(false);
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`${
          fixed ? 'fixed bg-white' : 'absolute'
        } z-50 px-8 py-6 w-full flex items-center mb-48 transition-all`}
      >
        <div className="flex w-full items-center justify-between">
          <div className="w-28 cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  className={`w-auto ${fixed ? '' : 'invert-1 brightness-0'} `}
                  alt="logo"
                />
              </a>
            </Link>
          </div>

          <nav className="hidden md:block flex-1 w-full mr-5">
            <ul
              className={`${
                fixed ? 'text-black' : 'text-white'
              } flex justify-end gap-x-6 font-semibold`}
            >
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            <button className="flex items-center flex-nowrap bg-aqua text-white font-medium rounded-full px-5 py-3 cursor-pointer">
              <GiRotaryPhone />
              (503) 610-8828
            </button>

            <div
              className={`flex-1 flex justify-end ${
                fixed ? 'text-black' : 'text-white'
              } cursor-pointer text-2xl md:hidden`}
              onClick={() => setToggle(!toggle)}
            >
              <FaBars />
            </div>
          </div>
        </div>
      </header>
      {/* mobile menu */}
      <aside
        className={`fixed z-50 bg-black bg-opacity-70 top-0  bottom-0 ${
          toggle ? 'right-0' : '-right-full '
        } w-full transition-all`}
      >
        <div className="bg-white w-4/5 h-full absolute right-0 flex flex-col items-center justify-center">
          <ul
            className="font-bold flex flex-col gap-y-5"
            onClick={() => setToggle(!toggle)}
          >
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* close menu */}
        <div className="absolute z-50 left-4 top-8">
          <button
            className="text-white text-3xl cursor-pointer bg-aqua p-1.5 rounded-md"
            onClick={() => setToggle(!toggle)}
          >
            <FaTimes />
          </button>
        </div>
      </aside>
    </>
  );
}
