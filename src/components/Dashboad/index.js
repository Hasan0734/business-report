import Card from "../card";
import Layout from "../layout";

export default function Dashboard() {
    return (
        <>
            <Layout>
                <div className="lg:col-span-4 col-span-1">
                    <div className="flex justify-between my-6 flex-col sm:flex-row">
                        <h1 className="text-2xl font-semibold text-center">My Cases</h1>
                        <div className="flex gap-3 justify-end sm:justify-center mt-5 sm:mt-0">
                            <input className='p-1 border border-orange w-80 focus:outline-none' type="text" />
                            <button type="submit" className="text-white px-3  rounded-sm bg-orange"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div className="">
                        <p className="mb-2 text-xl font-semibold">Awating you action 03</p>
                        <div className="grid gap-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">
                            <Card title={"Name Clearence"} payment={true} status={'Application received, awating payment'}></Card>
                            <Card title={"Business Registration"} payment={true} status={'Application received, awating payment'}></Card>
                            <Card title={"Annual Report"} payment={true} status={'Application received, awating payment'}></Card>
                        </div>
                        <p className="my-2 text-xl font-semibold">Completed 03</p>
                        <div className="grid gap-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">

                            <Card title={"Name Clearence"} payment={false} status={'Case Completed'}></Card>
                            <Card title={"Business Registration"} payment={false} status={'Case Completed'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Case Completed'}></Card>
                        </div>
                        <p className="my-2 text-xl font-semibold">Archived 03</p>
                        <div className="grid gap-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">
                            <Card title={"Annual Report"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}