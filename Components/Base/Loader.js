import React from 'react'

const Loader = () => {
  return (
   <div className='w-full h-screen flex items-center justify-center'>
   

   <div id="container">
   <label class="loading-title">Loading ...</label>
   <span class="loading-circle sp1">
     <span class="loading-circle sp2">
       <span class="loading-circle sp3"></span>
     </span>
   </span>
 </div>

   </div>
  )
}

export default Loader