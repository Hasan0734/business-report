import { Header } from '..';
import Aside from '../Aside';
import Modals from '../Modals/Modals';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Modals/>
      <main className="container px-4 overflow-scroll  scrollbar-hide pt-10" style={{ height: '700px', }}>
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
