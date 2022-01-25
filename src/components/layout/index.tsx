import { Header } from '..';
import Aside from '../Aside';


export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main className="container px-4 overflow-scroll  scrollbar-hide pt-10" style={{ height: '730px', }}>
        <div className=" grid lg:grid-cols-5 gap-6 grid-cols-1">
          <div className="col-span-1">
            <Aside></Aside>
          </div>
          {children}
        </div>

      </main>

    </>
  );
}
