import Link from "next/link";
import Card from '../card/index';
import Layout from "../layout";
import SearchMenu from "../SearchMenu/SearchMenu";
import NotFound from "../NotFound/NotFound"
const InterlectualServices = () => {
    return (
        <>
            <Layout>
                <div className="lg:col-span-4 col-span-1">
                    <SearchMenu data={{ title: 'Interlectual Property Services' }} />
                    <div className="">
                        <NotFound/>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default InterlectualServices;