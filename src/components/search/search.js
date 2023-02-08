import React from 'react'

const Search = ({_dark}) => {
  return (
    <section className='my-20'>
        <div className={_dark === false ? 'mx-auto w-1/2 bg-white px-12 py-8 shadow-md shadow-black rounded' : 'mx-auto w-1/2 bg-gray-800 px-12 py-8 shadow-md shadow-white rounded'}>
            <h3 className={_dark === false ? 'text-green-900 font-bold tracking-widest mb-4' : 'text-green-200 font-bold tracking-widest mb-4'}>Search Your Favorite Cocktail</h3>
            <input type="text" className='bg-gray-100 w-full'/>
        </div>
    </section>
  )
}

export default Search