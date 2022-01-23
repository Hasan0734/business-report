import Link from "next/link";

export default function Card({ status, title, payment }) {
    return (
        <>
            <Link href="/">
                <a>
                    <div className="border border-gray p-2">
                        <div className="flex gap-3">
                            <div className="text-orange text-xl"><i class="far fa-folder"></i></div>
                            <div>
                                <p className=" text-xl font-semibold ">{title}</p>
                                <p className={`${payment && 'text-red'} text-lg`}>{status}</p>
                                <p className="text-xs mt-2 font-semibold"><small>Case #: E-200220111-151</small></p>
                                <p className="text-xs font-semibold"><small>Trans #: PTXN200220111-151</small></p>
                                <p className="text-xs font-semibold"><small>Date : PTX200220111-151</small></p>
                            </div>
                        </div>

                        <div className="border-t border-gray flex mt-2 align-middle justify-between ml-8">
                            <p className="text-sm font-semibold "><small>See more...</small></p>
                            <p className="text-sm font-semibold"><small>Total Processing Time : 5hrs 30mins</small></p>
                        </div>
                        <div>


                        </div>
                    </div>

                </a>
            </Link>
        </>
    )
}