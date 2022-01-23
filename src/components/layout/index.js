import { Header } from '..';
import Aside from '../Aside';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container px-4 ">
        <div className=" grid lg:grid-cols-5 gap-6 grid-cols-1">
          <div className="col-span-1">
            <Aside></Aside>
          </div>
          {children}
        </div>

      </main>
      {/* <main className=''>{children}</main> */}
      {/* <Footer /> */}
    </>
  );
}
