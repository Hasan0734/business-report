import Layout from "../layout";
import NotFound from "../NotFound/NotFound";
import SearchMenu from "../SearchMenu/SearchMenu";


const Copyright = () => {
    return (
        <>

            <Layout>
                <div className="lg:col-span-4 col-span-1">
                    <SearchMenu data={{title: 'My Copyright'}}/>
                    <div className="">
                       <NotFound/>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Copyright;