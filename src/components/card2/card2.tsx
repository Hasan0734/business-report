const Card2 = ({ data }) => {


    return (
        <>
            <div className="border border-gray p-2 pr-3">
                <div className="flex gap-3 items-center">
                    <div className="text-orange text-xl">
                        
                             {data.icon}               
                        </div>
                    <p className=" text-xl font-semibold ">{data.name}</p>
                </div>
                <p className="text-xs font-semibold py-3">{data.title}</p>
                <div className="border-t pt-1 border-gray flex items-center justify-between">
                    <p className="text-lg font-semibold "><small>Learn more</small></p>
                    <small>
                        <button className=" border px-3  rounded-md border-orange">Apply</button>
                    </small>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}
export default Card2;