import Link from "next/link";

export default function Header() {


  return (
    <>
      <header className="">

        <div className="border border-iron ">
          <div className="container mx-auto ">

            <nav className="flex hidden sm:flex justify-between align-middle py-4 px-4 ">
              <div>
                <h3 className="text-lg font-semibold">My Cases</h3>
              </div>
              <ul className="flex gap-4 justify-end align-middle">
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
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
