import Image from 'next/image';
import React from 'react';
import spaceX from '../../assets/icons/share.jpg';
import Layout from '../layout';

const MyBusiness = () => {
    return (
        <>
            <Layout>
                <div className="lg:col-span-4 col-span-1">
                    <div className="flex gap-3">
                        <div className="w-24">
                            <Image src={spaceX} />
                            <p className="text-xs text-center">Edit logo</p>
                        </div>
                        <h1 className="text-2xl font-semibold">SPACE X EXPLORATION LIMITED</h1>
                    </div>
                    <div className="mt-4">
                        <p className="text-xs my-2">Copany Number: <span className="text-xs font-medium">12002154444</span></p>
                        <p className="text-xs my-2 font-medium">A private limited company incorporated on 01 January 2022</p>
                        <p className="text-xs my-2">Registered Office: <span className="text-xs font-medium">Plot no 29203, Northrise, London, United Kingdom.</span></p>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-xl font-semibold">Compliance Status</h2>
                        <div className="mt-4 grid gap-y-6 gap-x-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">

                            <div className="border border-gray p-2 pr-3">
                                <div className="flex gap-3 items-center justify-between">
                                    <div className="text-orange text-xl">

                                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24" /><path d="M5,10h14v2h2V6c0-1.1-0.9-2-2-2h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h7v-2H5V10z M5,6h14v2H5 V6z M22.84,16.28l-0.71,0.71l-2.12-2.12l0.71-0.71c0.39-0.39,1.02-0.39,1.41,0l0.71,0.71C23.23,15.26,23.23,15.89,22.84,16.28z M19.3,15.58l2.12,2.12l-5.3,5.3H14v-2.12L19.3,15.58z" /></svg>
                                    </div>
                                    <p className=" text-xl font-semibold ">Annual Return</p>
                                    <button className="px-2 py-1 bg-red text-white rounded-md text-sm">Non Complete</button>
                                </div>
                                <p className="text-xs font-semibold py-3">Last filing was on 01 March 2021</p>
                                <div className="border-t pt-2 border-gray flex items-center justify-between">
                                    <button className="px-2 rounded-md border-1 border-orange text-sm py-1">Set Remainder</button>
                                    <div>
                                        <button className="px-2 rounded-md border-1 border-orange text-sm mr-2 py-1">Get Invoince</button>
                                        <button className="px-2 rounded-md border-1 border-orange text-sm  py-1">File</button>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className="border border-gray p-2 pr-3">
                                <div className="flex gap-3 items-center justify-between">
                                    <div className="flex gap-3 items-center">
                                        <div className="text-orange text-xl">

                                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24" /><path d="M5,10h14v2h2V6c0-1.1-0.9-2-2-2h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h7v-2H5V10z M5,6h14v2H5 V6z M22.84,16.28l-0.71,0.71l-2.12-2.12l0.71-0.71c0.39-0.39,1.02-0.39,1.41,0l0.71,0.71C23.23,15.26,23.23,15.89,22.84,16.28z M19.3,15.58l2.12,2.12l-5.3,5.3H14v-2.12L19.3,15.58z" /></svg>
                                        </div>
                                        <p className=" text-xl font-semibold ">Nominal Capital</p>
                                    </div>
                                    <button className="px-2 py-1 bg-green text-white rounded-md text-sm">Complete</button>
                                </div>
                                <p className="text-xs font-semibold py-3">Current nominal capital is 15,000.00</p>
                                <div className="border-t pt-2 border-gray flex items-center justify-between">
                                    {/* <button className="px-2 rounded-md border-1 border-orange text-sm py-1">Set Remainder</button>
                                    <div>
                                        <button className="px-2 rounded-md border-1 border-orange text-sm mr-2 py-1">Get Invoince</button>
                                        <button className="px-2 rounded-md border-1 border-orange text-sm  py-1">File</button>
                                    </div> */}
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className="border border-gray p-2 pr-3">
                                <div className="flex gap-3 items-center justify-between">
                                    <div className="flex gap-3 items-center">
                                        <div className="text-orange text-xl">

                                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24" /><path d="M5,10h14v2h2V6c0-1.1-0.9-2-2-2h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h7v-2H5V10z M5,6h14v2H5 V6z M22.84,16.28l-0.71,0.71l-2.12-2.12l0.71-0.71c0.39-0.39,1.02-0.39,1.41,0l0.71,0.71C23.23,15.26,23.23,15.89,22.84,16.28z M19.3,15.58l2.12,2.12l-5.3,5.3H14v-2.12L19.3,15.58z" /></svg>
                                        </div>
                                        <p className=" text-xl font-semibold ">Per Value</p>
                                    </div>
                                    <button className="px-2 py-1 text-white bg-green rounded-md text-sm">Complete</button>
                                </div>
                                <p className="text-xs font-semibold py-3">Per value is currently at 1.00 per share</p>
                                <div className="border-t pt-2 border-gray flex items-center justify-between">
                                    {/* <button className="px-2 rounded-md border-1 border-orange text-sm py-1">Set Remainder</button>
                                    <div>
                                        <button className="px-2 rounded-md border-1 border-orange text-sm mr-2 py-1">Get Invoince</button>
                                        <button className="px-2 rounded-md border-1 border-orange text-sm  py-1">File</button>
                                    </div> */}
                                </div>
                                <div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-xl font-semibold">Compliance Status</h2>
                        <div className="mt-3">
                            <div className=" border border-gray px-2 py-3">
                                <p>Making of weird stuff</p>
                            </div>
                            <div className=" border border-gray px-2 py-3 flex justify-between">
                                <p>Trading in space exploration activitis</p>
                                <div> <button className="bg-blue px-2 text-white rounded-md">main</button></div>
                            </div>
                            <button className=" border-2 px-4 py-2 mt-2 rounded-md text-orange border-orange">
                                Make changes to Nature of Business
                            </button>


                        </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-xl font-semibold">Person Director, Secretaries, Shareholders and Beneficial Owners</h2>
                        <div className="mt-3">
                            <div className=" border border-gray px-2 py-3 flex justify-between">
                                <p>John Dore - 7,500 Shares</p>
                                <div>
                                    <button className="bg-blue px-2 mt-2 sm:mt-0 mx-2 text-white rounded-md">Director</button>
                                    <button className="bg-blue px-2 mt-2 sm:mt-0 mx-2 text-white rounded-md">Shareholders</button>
                                    <button className="bg-blue px-2 mt-2 sm:mt-0 mx-2 text-white rounded-md">Beneficial owner</button>
                                </div>
                            </div>
                            <div className=" border border-gray px-2 py-3 flex  justify-between">
                                <p>John Dore - 7,500 Shares</p>
                                <div>
                                    <button className="bg-blue px-2 mt-2 sm:mt-0 mx-2 text-white rounded-md">Director</button>
                                    <button className="bg-blue px-2 mt-2 sm:mt-0 mx-2 text-white rounded-md">Shareholders</button>
                                    <button className="bg-blue px-2 mt-2 sm:mt-0 mx-2 text-white rounded-md">Secretaries</button>
                                    <button className="bg-blue px-2 mt-2 sm:mt-0 mx-2 text-white rounded-md">Beneficial owner</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default MyBusiness;