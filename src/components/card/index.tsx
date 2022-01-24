
import { useState } from "react"
import CaseDocuments from "../CaseDocuments/CaseDocuments"
export default function Card({ status, title, payment }) {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            {openModal && <CaseDocuments />}
            <div onClick={() => setOpenModal(!openModal)} className="border cursor-pointer border-gray p-2">
                <div className="flex gap-3">
                    <div className="text-orange text-xl"><i className="far fa-folder"></i></div>
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