const Card2 = ({ data }) => {
    return (
        <>
            <div className="border border-gray p-2">
                <div className="flex gap-3 items-center">
                    <div className="text-orange text-xl"><i class="far fa-folder"></i></div>
                    <p className=" text-xl font-semibold ">{data.name}</p>
                </div>
                <p className="text-xl font-semibold py-3">{data.title}</p>
                <div className="border-t py-2 border-gray flex items-center justify-between">
                    <p className="text-lg font-semibold ">Learn more</p>

                  <p>
                  <span clssName="bg-black text-lg font-semibold border border-gray">
                        Apply
                    </span>
                  </p>

                </div>
                <div>


                </div>
            </div>
        </>
    )
}
export default Card2;