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
                            <Card2 data={{ name: 'Name Clearance', title: 'Get a name clearedfor registration' }} />
                            <Card2 data={{ name: 'Name Clearance', title: 'Get a name clearedfor registration' }} />
                            <Card2 data={{ name: 'Name Clearance', title: 'Get a name clearedfor registration' }} />
                        </div>
                        <div className="flex mt-4 justify-between items-center">
                            <p className="my-2 text-xl font-semibold ">Post - Registration Service</p>


                            <Link href="/">
                                <a className="text-blue text-xl" >Load more...</a>
                            </Link>

                        </div>
                        <div className="grid gap-y-6 gap-x-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">
                            <Card2 data={{ name: 'Name Clearance', title: 'Get a name clearedfor registration' }} />
                            <Card2 data={{ name: 'Name Clearance', title: 'Get a name clearedfor registration' }} />
                            <Card2 data={{ name: 'Name Clearance', title: 'Get a name clearedfor registration' }} />
                        </div>
                        <div className="flex mt-4 justify-between items-center">
                            <p className="my-2 text-xl font-semibold ">Post - Registration Service</p>
                            <Link href="/">
                                <a className="text-blue text-xl" >Load more...</a>
                            </Link>

                        </div>
                        <div className="grid gap-y-6 gap-x-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">
                            <Card2 data={{ name: 'Name Clearance', title: 'Get a name clearedfor registration' }} />
                            <Card2 data={{ name: 'Name Clearance', title: 'Get a name clearedfor registration' }} />
                            <Card2 data={{ name: 'Name Clearance', title: 'Get a name clearedfor registration' }} />
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