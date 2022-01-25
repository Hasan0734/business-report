import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from 'react';
import Logo from '../../assets/icons/logo.jpeg';
export default function Header() {
  const [business, setBusiness] = useState(false)
  const [interlectual, setInterlectual] = useState(false)
  const [menuToggle, setMenuToggle] = useState(false)

  const router = useRouter()
  const { pathname } = router
  const [routeCheck, setRouteCheck] = useState(pathname == '/business-services' || pathname == '/interlectual-property-services' ? false : true)
  return (
    <>
      <header className="">

        <div className="border border-iron ">
          <div className="container mx-auto ">

            {routeCheck && <nav className="flex  justify-between items-start  sm:items-center  py-2 px-4 ">
              {/* small devices */}
              <div>
                <Link href='/'>
                  <a>
                    <div className="w-16">
                      <Image src={Logo} />
                    </div>
                  </a>
                </Link>
                {menuToggle && <ul className="flex mt-7 md:hidden flex-col gap-3">
                  <li>
                    <Link href='/my-cases'>
                      <a className={`font-semibold py-1 hover:underline hover:text-orange ${pathname === '/my-cases' && 'underline text-orange'}`} >My Cases</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-business-entities">
                      <a className={`font-semibold py-1 hover:underline hover:text-orange ${pathname === '/my-business-entities' && 'underline text-orange'}`} >My Business Entites</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-intellectual-property">
                      <a className={`font-semibold py-1 hover:underline hover:text-orange ${pathname === '/my-intellectual-property' && 'underline text-orange'}`} >My Intellectual Property</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/copyright">
                      <a className={`font-semibold py-1 hover:underline hover:text-orange ${pathname === '/copyright' && 'underline text-orange'}`} >My Copyright</a>
                    </Link>
                  </li>
                </ul>}
              </div>

              {/* small devices end */}
              {/* lg devies */}
              <div>
                <ul className={`md:flex hidden gap-4 justify-end items-start sm:items-center `}>
                  <li>
                    <Link href='/my-cases'>
                      <a className={`font-semibold py-1 hover:underline hover:text-orange ${pathname === '/my-cases' && 'underline text-orange'}`} >My Cases</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-business-entities">
                      <a className={`font-semibold py-1 hover:underline hover:text-orange ${pathname === '/my-business-entities' && 'underline text-orange'}`} >My Business Entites</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-intellectual-property">
                      <a className={`font-semibold py-1 hover:underline hover:text-orange ${pathname === '/my-intellectual-property' && 'underline text-orange'}`} >My Intellectual Property</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/copyright">
                      <a className={`font-semibold py-1 hover:underline hover:text-orange ${pathname === '/copyright' && 'underline text-orange'}`} >My Copyright</a>
                    </Link>
                  </li>

                </ul>
                <button className="block md:hidden mt-3 sm:mt-0">

                  <span onClick={() => setMenuToggle(!menuToggle)}>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" /></svg> */}
                    <svg className="svg-icon w-8" viewBox="0 0 20 20">
                      <path fill="black" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z" />
                    </svg>
                  </span>
                </button>
              </div>
              {/* lg devices end */}
            </nav>}



            {/* business service dropdown btn */}

            {pathname == '/business-services' && <div >
              <nav className="flex justify-between items-center py-4 px-4">
                <Link href='/'>
                  <a>
                    <div className="w-16">
                      <Image src={Logo} />
                    </div>
                  </a>
                </Link>
                <div>
                  <button onClick={() => setBusiness(!business)} className="flex items-center gap-x-2 font-medium ">Business Services

                    <svg className=" w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>

                    </svg>
                  </button>


                </div>
              </nav>
            </div>}
            {/* business service dropdown btn end */}
            {/* business dropdown menu */}
            <div className="flex justify-end">
              <div className={`${business ? 'block' : 'hidden'} absolute border border-gray z-10 w-44 text-base list-none bg-white rounded divide-y`}>
                <ul className="p-1 ">
                  <li>
                    <a href="#" className="block py-2 px-4 text-lg hover:bg-gray ">Business</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-lg hover:bg-gray ">Business</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-lg hover:bg-gray ">Business</a>
                  </li>
                </ul>

              </div>
            </div>
            {/* business dropdown menu end */}

            {/* intelectula dropdown btn */}

            {pathname == '/interlectual-property-services' && <div >
              <nav className="flex justify-between items-center py-4 px-4">
                <Link href='/'>
                  <a>
                    <div className="w-16">
                      <Image src={Logo} />
                    </div>
                  </a>
                </Link>
                <div>
                  <button onClick={() => setInterlectual(!interlectual)} className="flex items-center gap-x-2 font-medium ">
                    Interlectual Property Services
                    <svg className=" w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                    </svg>
                  </button>


                </div>
              </nav>
            </div>}
            {/* interlectual dropdown btn end */}
            {/* interlectual dropdown */}
            <div className="flex justify-end">
              <div className={`${interlectual ? 'block' : 'hidden'} absolute border border-gray z-10 w-44 text-base list-none bg-white rounded divide-y`}>
                <ul className="p-1 ">
                  <li>
                    <a href="#" className="block py-2 px-4 text-lg hover:bg-gray ">Interlectual</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-lg hover:bg-gray ">Interlectual</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-lg hover:bg-gray ">Interlectual</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* interlectual dropdown end */}
          </div>
        </div>
      </header>
    </>
  );
}
