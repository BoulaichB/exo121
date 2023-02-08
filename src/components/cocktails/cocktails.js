import React from 'react'

const Cocktails = ({_img, _name, _type, _alcohol, _dark}) => {

  return (
    
    <div className={_dark === false ? "w-1/4 mr-4 mb-10 bg-white border border-gray-200 rounded-lg shadow-black shadow-sm" : "w-1/4 mr-4 mb-10 bg-gray-800 border border-gray-200 rounded-lg shadow-white shadow-sm"}>
    <a href="#">
        <img class="rounded-t-lg" src={_img} alt={_name} />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className={_dark === false ? "mb-2 text-2xl font-bold tracking-tight text-black tracking-widest" : "mb-2 text-2xl font-bold tracking-tight text-white tracking-widest"}>{_name}</h5>
        </a>
        <p className={_dark === false ? "text-black font-bold tracking-widest" : "text-white font-bold tracking-widest"}>{_type}</p>
        <p className="mb-2 font-normal text-gray-400 dark:text-gray-400">{_alcohol}</p>
        <a href="#" className="inline-flex items-center px-4 py-1 text-sm font-medium text-center text-white bg-green-700 rounded hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 tracking-widest">
            DETAILS
        </a>
    </div>
</div>

  )
}

export default Cocktails