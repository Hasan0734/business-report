import Link from "next/link";

export default function Aside() {
    return (
        <>


            <div className="flex flex-wrap lg:flex-col sm:gap-2  justify-center items-center mt-24">

                <div className="my-10 mx-4 ">
                    <Link href='/'>
                        <a className="">
                            <div className=" rounded hover:text-orange  ">
                                <span className="flex justify-center" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" /></svg>
                                </span>
                                <h3 className="font-semibold">Dashboard</h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="my-10 mx-4 ">
                    <Link href='/business-services'>
                        <a className="">
                            <div className=" rounded hover:text-orange text-center">
                                <span className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" /></svg>

                                </span>
                                <h3 className="font-semibold">Business Services</h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="my-10 mx-4">
                    <Link href='/interlectual-property-services'>
                        <a className="">
                            <div className="rounded hover:text-orange text-center">
                                <span className="flex justify-center" >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" /></svg>
                                </span>
                                <h3 className="font-semibold">Interlectual Property Services</h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="my-10 mx-4">
                    <Link href='/copyright'>
                        <a className=" ">
                            <div className=" rounded hover:text-orange text-center" >
                                <span className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 6.47L5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"/></svg>
                   
                                </span>
                                <h3 className="font-semibold">Copyright Services</h3>
                            </div>
                        </a>
                    </Link>
                </div>

            </div>

        </>
    )
}