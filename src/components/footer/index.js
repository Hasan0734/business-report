import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import logo from '/public/logoc.png';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-mirage text-white pt-16">
      <div className="container px-4 flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row lg:gap-x-8">
        <div className="flex-1">
          <div className="">
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  className="w-auto  invert-1 brightness-0"
                  alt="logo"
                  width={400}
                  height={200}
                />
              </a>
            </Link>
          </div>
          <ul className="flex gap-x-1 flex-nowrap mt-3">
            <li className="bg-aqua text-white w-11 h-11 cursor-pointer rounded-md text-xl flex items-center justify-center">
              <Link href="/">
                <a>
                  <FaFacebookF />
                </a>
              </Link>
            </li>
            <li className="bg-aqua text-white w-11 h-11 cursor-pointer rounded-md text-xl flex items-center justify-center">
              <Link href="/">
                <a>
                  <BsTwitter />
                </a>
              </Link>
            </li>
            <li className="bg-aqua text-white w-11 h-11 cursor-pointer rounded-md text-xl flex items-center justify-center">
              <Link href="/">
                <a>
                  <BsYoutube />
                </a>
              </Link>
            </li>
            <li className="bg-aqua text-white w-11 h-11 cursor-pointer rounded-md text-xl flex items-center justify-center">
              <Link href="/">
                <a>
                  <FaLinkedinIn />
                </a>
              </Link>
            </li>
            <li className="bg-aqua text-white w-11 h-11 cursor-pointer rounded-md text-xl flex items-center justify-center">
              <Link href="/">
                <a>
                  <BsInstagram />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold uppercase text-lg border-b border-b-iron-gray pb-4">
            our company
          </h3>
          <ul className="mt-5">
            <li>
              <Link href="">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>How it works</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Reviews</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold uppercase text-lg border-b border-b-iron-gray pb-4">
            services
          </h3>
          <ul className="mt-5 capitalize">
            <li>
              <Link href="">
                <a>Locations</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Agents</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Investors</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>contractors</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>FAQs</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold uppercase text-lg border-b border-b-iron-gray pb-4">
            contact us
          </h3>
          <div className="mt-5 flex flex-col gap-y-3">
            <div className=" flex gap-x-3">
              <div className="w-12 h-12 rounded-full  bg-aqua text-white flex items-center justify-center text-xl">
                <HiLocationMarker />
              </div>
              <p className="font-semibold text-white flex-1">
                21370 SW Langer Farms Pkwy Suite 142-277, Sherwood, OR 97140
              </p>
            </div>
            <div className=" flex gap-x-3">
              <div className="w-12 h-12 rounded-full  bg-aqua text-white flex items-center justify-center text-xl">
                <AiOutlineMail />
              </div>
              <Link href="mailto:">
                <a className="font-semibold text-white flex-1">
                  info@qhrei.com
                </a>
              </Link>
            </div>
            <div className=" flex gap-x-3">
              <div className="w-12 h-12 rounded-full  bg-aqua text-white flex items-center justify-center text-xl">
                <MdCall />
              </div>
              <Link href="tel:">
                <a className="font-semibold text-white flex-1">
                  (503) 610-8828
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 border-t py-5 border-t-white border-b border-b-iron-gray mt-8">
        <p>
          Copyright &copy;{year} Quality Homes Reimagined, LLC. All rights
          reserved. Powered by Top Results Consulting
        </p>
      </div>
    </footer>
  );
}
