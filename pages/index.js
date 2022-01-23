import { useState } from 'react';
import Dashboard from '../src/components/Dashboad';

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
}
