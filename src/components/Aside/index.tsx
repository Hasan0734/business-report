import Link from "next/link";

export default function Aside() {
    return (
        <>


            <div className="flex flex-wrap lg:flex-col sm:gap-2 justify-center items-center mt-0 sm:mt-12">

                <div className="my-10 mx-4 ">
                    <Link href='/'>
                        <a className="">
                            <div className=" rounded hover:text-orange text-center">
                                <span className="text-orange"><i className="fas fa-search"></i></span>
                                <h3 className="font-semibold">Dashboard</h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="my-10 mx-4 ">
                    <Link href='/business-services'>
                        <a className="">
                            <div className=" rounded hover:text-orange text-center">
                                <span className="text-orange"><i className="fas fa-search"></i></span>
                                <h3 className="font-semibold">Business Services</h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="my-10 mx-4">
                    <Link href='/interlectual-property-services'>
                        <a className="">
                            <div className="rounded hover:text-orange text-center">
                                <span className="text-orange"><i className="fas fa-search"></i></span>
                                <h3 className="font-semibold">Interlectual Property Services</h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="my-10 mx-4">
                    <Link href='/copyright'>
                        <a className=" ">
                            <div className=" rounded hover:text-orange text-center" >
                                <span className="text-orange"><i className="fas fa-search"></i></span>
                                <h3 className="font-semibold">Copyright Services</h3>
                            </div>
                        </a>
                    </Link>
                </div>

            </div>

        </>
    )
}