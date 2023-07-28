import React from 'react'

const Button = ({text,Redirctpage}) => {
  return (
    <button
    onClick={Redirctpage}
    className='relative inline-flex items-center justify-start px-6 py-3 border-[1px] border-solid border-mainRed overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group mt-4'>
             <span class="w-48 h-48 rounded rotate-[-40deg] bg-mainRed  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
             <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">{text}</span>
             </button>
  )
}

export default Button