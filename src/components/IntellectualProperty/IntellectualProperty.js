import Layout from "../layout";
import SearchMenu from "../SearchMenu/SearchMenu";
import NotFound from "../NotFound/NotFound"

const IntellectualProperty = () => {
    return (
        <>
            <Layout>
                <div className="lg:col-span-4 col-span-1">
                    <SearchMenu data={{ title: 'My Intellectual Property' }} />
                    <div className=" ">
                        <NotFound/>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default IntellectualProperty;