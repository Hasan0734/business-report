import Layout from "../layout";
import SearchMenu from "../SearchMenu/SearchMenu";


const Copyright = () => {
    return (
        <>

            <Layout>
                <div className="lg:col-span-4 col-span-1">
                    <SearchMenu data={{title: 'My Copyright'}}/>
                    <div className="">
                        <h1>Hello this is not found</h1>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Copyright;