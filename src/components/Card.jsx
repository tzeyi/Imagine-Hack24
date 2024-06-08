function Card() {
    return (
        <div className="h-[540px] w-[420px] pt-5 text-center bg-slate-500 text-white text-md rounded-[15px]">
            <div>
                Name
            </div>
            <div>
                Username
            </div>
            <button className='absolute top-[85%] right-[10%] m-0 p-0 bg-transparent hover:border-0'>
            <img src='heart-icon.png' width={50} height={50} className='[&:not(:hover)]:grayscale'/>
            </button>
        </div>
    )
}

export default Card