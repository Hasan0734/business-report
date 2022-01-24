import Link from "next/link";
import Card2 from '../card2/card2';
import Layout from "../layout";
import SearchMenu from "../SearchMenu/SearchMenu";
const BusinessServices = () => {
    return (
        <>
            <Layout>
                <div className="lg:col-span-4 col-span-1">
                    <SearchMenu data={{ title: 'Business Services' }} />
                    <div className="">

                        <p className="my-2 text-xl font-semibold">Registration Service</p>
                        <div className="grid gap-y-6 gap-x-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">
                            <Card2 data={{ name: 'Name Clearance', title: 'Get a name clearedfor registration', icon:                     <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" fill-rule="evenodd"/><polygon fill-rule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"/><rect fill-rule="evenodd" height="2" width="5" x="5" y="7"/><rect fill-rule="evenodd" height="2" width="5" x="5" y="11"/><rect fill-rule="evenodd" height="2" width="5" x="5" y="15"/></g></g></svg>
 }} />
                            <Card2 data={{ name: 'Name Revervation', title: 'Get a name clearedfor registration', icon:                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" fill-rule="evenodd"/><polygon fill-rule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"/><rect fill-rule="evenodd" height="2" width="5" x="5" y="7"/><rect fill-rule="evenodd" height="2" width="5" x="5" y="11"/><rect fill-rule="evenodd" height="2" width="5" x="5" y="15"/></g></g></svg>
 }} />
                            <Card2 data={{ name: 'Business Registration', title: 'Get a name clearedfor registration', icon: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><g><rect fill="none" height="24" width="24"/></g><g><path d="M20,6h-8l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V6h5.17l1.41,1.41 L11.17,8H20V18z M12.16,12H8v2h4.16l-1.59,1.59L11.99,17L16,13.01L11.99,9l-1.41,1.41L12.16,12z"/></g></svg> }} />
                        </div>
                        <div className="flex mt-4 justify-between items-center">
                            <p className="my-2 text-xl font-semibold ">Post - Registration Service</p>


                            <Link href="/">
                                <a className="text-blue text-xl" >Load more...</a>
                            </Link>

                        </div>
                        <div className="grid gap-y-6 gap-x-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">
                            <Card2 data={{ name: 'Annual Return', title: 'Get a name clearedfor registration', icon: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><g><rect fill="none" height="24" width="24"/></g><g><path d="M20,6h-8l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V6h5.17l1.41,1.41 L11.17,8H20V18z M12.16,12H8v2h4.16l-1.59,1.59L11.99,17L16,13.01L11.99,9l-1.41,1.41L12.16,12z"/></g></svg> }} />

                            <Card2 data={{ name: 'Entity Snapshot (Printout)', title: 'Get a name clearedfor registration', icon: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M15,3H5C3.9,3,3.01,3.9,3.01,5L3,19c0,1.1,0.89,2,1.99,2H19c1.1,0,2-0.9,2-2V9L15,3z M5,19V5h9v5h5v9H5z M9,8 c0,0.55-0.45,1-1,1S7,8.55,7,8s0.45-1,1-1S9,7.45,9,8z M9,12c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S9,11.45,9,12z M9,16 c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S9,15.45,9,16z"/></g></g></svg> }} />
                        </div>
                        <div className="flex mt-4 justify-between items-center">
                            <p className="my-2 text-xl font-semibold ">Post - Registration Service</p>
                            <Link href="/">
                                <a className="text-blue text-xl" >Load more...</a>
                            </Link>

                        </div>
                        <div className="grid gap-y-6 gap-x-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">
                            <Card2 data={{ name: 'Compliance Invoice', title: 'Get a name clearedfor registration', icon:  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM5 18c.2-.63 2.57-1.68 4.96-1.94l2.04-2c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-2-2H5zm15.6-5.5l-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z"/></svg>
                 }} />
                            <Card2 data={{ name: 'Registered User', title: 'Get a name clearedfor registration', icon: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><g><rect fill="none" height="24" width="24"/></g><g><g><rect height="4" width="4" x="10" y="4"/><rect height="4" width="4" x="4" y="16"/><rect height="4" width="4" x="4" y="10"/><rect height="4" width="4" x="4" y="4"/><rect height="4" width="4" x="16" y="4"/><polygon points="11,17.86 11,20 13.1,20 19.08,14.03 16.96,11.91"/><polygon points="14,12.03 14,10 10,10 10,14 12.03,14"/><path d="M20.85,11.56l-1.41-1.41c-0.2-0.2-0.51-0.2-0.71,0l-1.06,1.06l2.12,2.12l1.06-1.06C21.05,12.07,21.05,11.76,20.85,11.56z"/></g></g></svg>
                    }} />
                            <Card2 data={{ name: 'Registry Search', title: 'Get a name clearedfor registration', icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg> }} />
                        </div>
                        <div className="flex justify-end mt-4">
                            <Link href="/">
                                <a className="text-blue text-xl" >Load more...</a>
                            </Link>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    );
};

export default BusinessServices;