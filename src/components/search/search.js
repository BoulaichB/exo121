import React from 'react'

const Search = () => {
  return (
    <section className='my-20'>
        <div className='mx-auto w-1/2 bg-white px-12 py-8 shadow-md shadow-black rounded'>
            <h3 className='text-green-900 font-bold tracking-widest mb-4'>Search Your Favorite Cocktail</h3>
            <input type="text" className='bg-gray-100 w-full'/>
        </div>
    </section>
  )
}

export default Search