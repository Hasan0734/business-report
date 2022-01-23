import Link from "next/link";

export default function Aside() {
    return (
        <>


            <div className="flex sm:flex-row lg:flex-col sm:gap-2 justify-center mt-0 sm:mt-12">

                <div className="my-10 p-2  active:bg-white-smoke rounded">
                    <Link href='/'>
                        <a className="hover:text-orange text-center">
                            <div >
                                <span className="text-orange"><i class="fas fa-search"></i></span>
                                <h3>Dashboard</h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="my-10 p-1 active:bg-white-smoke rounded">
                    <Link href='/'>
                        <a className="hover:text-orange text-center">
                            <div >
                                <span className="text-orange"><i class="fas fa-search"></i></span>
                                <h3>Business Services</h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="my-10 p-1 active:bg-white-smoke rounded">
                    <Link href='/'>
                        <a className="hover:text-orange text-center">
                            <div >
                                <span className="text-orange"><i class="fas fa-search"></i></span>
                                <h3>Interlectual Property Services</h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="my-10 p-1 ">
                    <Link href='/'>
                        <a className="hover:text-orange text-center">
                            <div >
                                <span className="text-orange"><i class="fas fa-search"></i></span>
                                <h3>Copyright Services</h3>
                            </div>
                        </a>
                    </Link>
                </div>

            </div>

        </>
    )
}