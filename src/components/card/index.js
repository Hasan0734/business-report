import Link from "next/link";

export default function Card() {
    return (
        <>
            <Link href="/">
                <a>
                    <div className="border border-gray flex gap-2 p-2">
                        <div className="text-orange text-xl"><i class="far fa-folder"></i></div>
                        <div>
                            <div>
                                <p className=" text-xl font-semibold ">Name Clearance</p>
                                <p className="text-red text-lg">Application received, awating payment</p>
                                <p className="text-xs mt-2 font-semibold"><small>Case #: E-200220111-151</small></p>
                                <p className="text-xs font-semibold"><small>Trans #: PTXN200220111-151</small></p>
                                <p className="text-xs font-semibold"><small>Date : PTX200220111-151</small></p>
                            </div>
                            <div className="border-t border-gray flex mt-2 align-middle justify-between">
                                <p className="text-sm font-semibold"><small>See more...</small></p>
                                <p className="text-sm font-semibold"><small>Total Processing Time : 5hrs 30mins</small></p>
                            </div>
                        </div>
                    </div>

                </a>
            </Link>
        </>
    )
}