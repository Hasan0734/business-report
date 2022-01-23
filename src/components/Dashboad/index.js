import Aside from "../Aside";
import Card from "../card";
import Layout from "../layout";

export default function Dashboard() {
    return (
        <>
            <Layout>
                <div className="grid lg:grid-cols-5 gap-6 grid-cols-1">
                    <div className="col-span-1">
                        <Aside></Aside>
                    </div>
                    <div className="lg:col-span-4 col-span-1">
                        <div className="flex justify-between my-6 flex-col sm:flex-row">
                            <h1 className="text-2xl font-semibold text-center">My Cases</h1>
                            <div className="flex gap-3 justify-end sm:justify-center mt-5 sm:mt-0">
                                <input className='p-1 border border-orange w-80 focus:outline-none' type="text" />
                                <button type="submit" className="text-white px-3  rounded-sm bg-orange"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                        <div className="">
                            <p>Awating you action 03</p>
                            <div className="grid gap-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        </>
    )
}