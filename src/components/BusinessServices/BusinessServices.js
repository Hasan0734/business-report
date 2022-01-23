import Link from "next/link";
import Layout from "../layout";
import SearchMenu from "../SearchMenu/SearchMenu";
import Card2 from '../card2/card2'
const BusinessServices = () => {
    return (
        <>
            <Layout>
                <div className="lg:col-span-4 col-span-1">
                    <SearchMenu data={{ title: 'Business Services' }} />
                    <div className="">
                        <p className="mb-2 text-xl font-semibold">Business Names 03</p>
                        <Card2 data={{name: 'Name Clearance', title: 'Get a name clearedfor registration'}}/>

                        <div className="text-end">
                            <Link href="/">
                                <a className="">Load more...</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default BusinessServices;