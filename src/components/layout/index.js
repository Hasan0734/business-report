import { Header } from '..';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='container px-4'>
        
      </div>
      <main className='container px-4 '>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
