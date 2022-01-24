import { NextPage } from 'next';
import { useState } from 'react';
import Dashboard from './../src/components/Dashboad/index';

const Home: NextPage = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
}

export default Home