
import { useState } from "react"
import CaseDocuments from "../CaseDocuments/CaseDocuments"
export default function Card({ status, title, payment }) {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            {openModal && <CaseDocuments />}
            <div onClick={() => setOpenModal(!openModal)} className="border cursor-pointer border-gray p-2">
                <div className="flex gap-2">
                    <div className="text-orange text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ad824a"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
                        </div>
                    <div>
                        <p className=" text font-semibold ">{title}</p>
                        <p className={`${payment && 'text-red'} text-lg`}>{status}</p>
                        <p className="text-xs mt-2 font-semibold"><small>Case #: E-200220111-151</small></p>
                        <p className="text-xs font-semibold"><small>Trans #: PTXN200220111-151</small></p>
                        <p className="text-xs font-semibold"><small>Date : PTX200220111-151</small></p>
                    </div>
                </div>

                <div className="border-t border-gray flex mt-2 items-center justify-between ml-8">
                    <p className="text-sm font-semibold "><small>See more...</small></p>
                    <p className="text-sm font-semibold"><small>Total Processing Time : 5hrs 30mins</small></p>
                </div>
                <div>


                </div>
            </div>

        </>
    )
}