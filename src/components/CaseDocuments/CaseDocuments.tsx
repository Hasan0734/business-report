import Modals from '../Modals/Modals';
const CaseDocuments = () => {
    return (
        <>
            <Modals>
                <div>

                    <div className="px-4 pt-5">
                        <h1 className="text-2xl sm:text-4xl  font-semibold">
                            Name Clearance Case Details
                        </h1>
                        <div className="flex flex-wrap my-3 gap-3 sm:gap-14 ">
                            <div className="">
                                <p className="p-0.5">Case Number</p>
                                <p className="p-0.5">E-2022011-2937</p>
                            </div>

                            <div className="">
                                <p className="p-0.5">Case Status</p>
                                <p className="p-0.5">Approved, Case Completed</p>
                            </div>
                            <div className="">
                                <p className="p-0.5">Application Date</p>
                                <p className="p-0.5">22 January 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pt-4">
                        <h1 className=" text-2xl sm:text-4xl  font-semibold">Entity Classifications </h1>
                        <div className="flex flex-wrap my-3 gap-3 sm:gap-14">
                            <div className="">
                                <p className="p-0.5">Case Number</p>
                                <p className="p-0.5">E-2022011-2937</p>
                            </div>

                            <div className="">
                                <p className="p-0.5">Case Status</p>
                                <p className="p-0.5">Approved, Case Completed</p>
                            </div>
                            <div className="">
                                <p className="p-0.5">Application Date</p>
                                <p className="p-0.5">22 January 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pt-4">
                        <h1 className='text-2xl sm:text-4xl  font-semibold '>Action Required</h1>
                        <p className="text-red text-xs sm:text-xl mt-4 font-semibold">Please complete the electronic from, sign it and then upload it with the reverted case.</p>
                    </div>
                    <div className="px-4 py-6">
                        <h1 className="text-2xl sm:text-4xl font-semibold">Case Documents</h1>
                        <div className="mt-3 border border-gray px-2 py-3 flex justify-between">
                            <div className="flex gap-2 text-xl font-semibold items-center">
                                <i className="far fa-list-alt text-orange"></i>
                                <h4 className="">Name Clearance Letter</h4>
                            </div>
                            <button className="text-xl font-semibold text-orange"><i className="fas fa-print"></i></button>
                        </div>
                        <div className="mt-3 border border-gray px-2 py-3 flex justify-between">
                            <div className="flex gap-2 text-xl font-semibold items-center">
                                <i className="far fa-list-alt text-orange"></i>
                                <h4 className="">Name Clearance Letter</h4>
                            </div>
                            <button className="text-xl font-semibold text-orange"><i className="fas fa-print"></i></button>
                        </div>
                        <div className="mt-3 border border-gray px-2 py-3 flex justify-between">
                            <div className="flex gap-2 text-xl font-semibold items-center">
                                <i className="far fa-list-alt text-orange"></i>
                                <h4 className="">Name Clearance Letter</h4>
                            </div>
                            <button className="text-xl font-semibold text-orange"><i className="fas fa-print"></i></button>
                        </div>
                        <div className="flex justify-end mt-3">
                            <button className="bg-orange text-white py-1 px-3 rounded-md">Resubmit case</button>
                        </div>
                    </div>

                </div>
            </Modals>
        </>
    )
}

export default CaseDocuments;