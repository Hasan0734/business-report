import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from 'react';

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

            {routeCheck && <nav className="flex  justify-between  py-4 px-4 ">
              {/* small devices */}
              <div>
                <h3 className="text-lg font-semibold">My Cases</h3>
                {menuToggle && <ul className="flex mt-7 md:hidden flex-col gap-3">
                  <li>
                    <Link href='/my-cases'>
                      <a className="font-semibold py-1 hover:underline hover:text-orange" >My Cases</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-business-entities">
                      <a className="font-semibold py-1 hover:underline hover:text-orange" >My Business Entites</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-intellectual-property">
                      <a className="font-semibold py-1 hover:underline hover:text-orange" >My Intellectual Property</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="copyright">
                      <a className="font-semibold py-1 hover:underline hover:text-orange">My Copyright</a>
                    </Link>
                  </li>
                </ul>}
              </div>

          {/* small devices end */}
          {/* lg devies */}
              <div>
                <ul className={`md:flex hidden gap-4 justify-end items-center`}>
                  <li>
                    <Link href='/my-cases'>
                      <a className="font-semibold p-1 hover:underline hover:text-orange" >My Cases</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-business-entities">
                      <a className="font-semibold p-1 hover:underline hover:text-orange" >My Business Entites</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-intellectual-property">
                      <a className="font-semibold p-1 hover:underline hover:text-orange" >My Intellectual Property</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="copyright">
                      <a className="font-semibold p-1 hover:underline hover:text-orange">My Copyright</a>
                    </Link>
                  </li>

                </ul>
                <button className="block md:hidden">
                  <i onClick={() => setMenuToggle(!menuToggle)} className="fas fa-bars"></i>
                </button>
              </div>
              {/* lg devices end */}
            </nav>}



        {/* business service dropdown btn */}

            {pathname == '/business-services' && <div >
              <nav className="flex justify-between items-center py-4 px-4">
                <div>
                  <h5>
                    My Cases
                  </h5>
                </div>
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
                <div>
                  <h5>
                    My Cases
                  </h5>
                </div>
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
