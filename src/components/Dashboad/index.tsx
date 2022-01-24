import Link from "next/link";
import Card from "../card";
import CaseDocuments from "../CaseDocuments/CaseDocuments";
import Layout from "../layout";
import SearchMenu from "../SearchMenu/SearchMenu";
import { useState } from "react";

export default function Dashboard() {
   

    return (
        <>
            <Layout>

                <div className="lg:col-span-4 col-span-1">
                    <SearchMenu data={{ title: 'My Cases' }} />
                    <div className="">
                        <p className="mb-2 text-xl font-semibold">Awating you action 03</p>
                        <div className="grid gap-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 mb-6">
                            <Card title={"Name Clearence"} payment={true} status={'Application received, awating payment'}></Card>
                            <Card title={"Business Registration"} payment={true} status={'Application received, awating payment'}></Card>
                            <Card title={"Annual Report"} payment={true} status={'Application received, awating payment'}></Card>
                        </div>
                        <p className="my-2 text-xl font-semibold">Completed 03</p>
                        <div className="grid gap-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 mb-6">

                            <Card title={"Name Clearence"} payment={false} status={'Case Completed'}></Card>
                            <Card title={"Business Registration"} payment={false} status={'Case Completed'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Case Completed'}></Card>
                        </div>
                        <p className="my-2 text-xl font-semibold">Archived 03</p>
                        <div className="grid gap-y-6 gap-x-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">
                            <Card title={"Annual Report"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>
                            <Card title={"Name Clearence"} payment={false} status={'Completed and Archived'}></Card>

                        </div>
                        <div className="text-end">
                            <Link href="/">
                                <a className="">Load more...</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}