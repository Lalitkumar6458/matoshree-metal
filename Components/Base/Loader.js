import React from 'react'

const Loader = () => {
  return (
   <div className='w-full h-screen flex items-center justify-center'>
   <div className="spinner-wrapper flex items-center justify-center">
 <div className="spinner">
  <div className="sk-folding-cube">
   <div className="sk-cube1 sk-cube"></div>
   <div className="sk-cube2 sk-cube"></div>
   <div className="sk-cube4 sk-cube"></div>
   <div className="sk-cube3 sk-cube"></div>
  </div>
 </div>
 <h3 className='text-white mt-[100px] ml-3'>Loading...</h3>
</div>

   </div>
  )
}

export default Loader