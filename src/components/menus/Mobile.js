import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiRotaryPhone } from 'react-icons/gi';

export default function Mobile() {
    const [fixed, setFixed] = useState(false);
    const [toggle, setToggle] = useState(false);

    const headerRef = useRef(null);

    return (
        <div
            className={`fixed z-50 px-8 w-full flex items-center transition-all font-asap`}
        >
            <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
    );
}

