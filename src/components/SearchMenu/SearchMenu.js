

const SearchMenu = ({ data }) => {
    return (
        <>
            <div className="flex justify-between my-6 flex-col sm:flex-row">
                <h1 className="text-2xl font-semibold text-center">{data.title}</h1>
                <div className="flex gap-3 justify-center  mt-5 sm:mt-0">
                    <input className='p-1 border border-orange w-80 focus:outline-none' type="text" />
                    <button type="submit" className="text-white px-3  rounded-sm bg-orange"><i class="fas fa-search"></i></button>
                </div>
            </div>
        </>
    );
};

export default SearchMenu;