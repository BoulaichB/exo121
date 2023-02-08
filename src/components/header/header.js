import React from 'react'
import '../../index.css';

const Header = ({_dark}) => {
  return (
    <header>
        <nav className={_dark === false ? "px-2 bg-white border-gray-200 shadow-md shadow-black" : "px-2 bg-gray-800 border-gray-200 shadow-md shadow-white"}>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" className="flex items-center">
                <span className={_dark === false ? "self-center text-xl font-semibold whitespace-nowrap" : "self-center text-xl font-semibold whitespace-nowrap text-white"}>{'TheCocktailsDB'}</span>
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className={_dark === false ? "flex flex-col p-4 mt-4 border border-white-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white" : "flex flex-col p-4 mt-4 border border-white-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-800"}>
                <li>
                <a href="#" className={_dark === false ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0" : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"} aria-current="page">{'Home'}</a>
                </li>
                
                <li>
                <a href="#" className={_dark === false ? "block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" : "block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"}>{'About'}</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
  )
}

export default Header