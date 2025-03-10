import React from 'react'
import { FiDownload } from "react-icons/fi";
const EditorNavbar = () => {
  return (
    <>
      <div className="EditiorNavbar flex items-center justify-between px-[24px] md:px-[100px] h-[80px] dark:bg-gray-900">
        <div className="logo flex justify-between items-center gap-2">
        <img className='w-[30px] md:w-[40px]' src="/code.png" alt="logo" />
        <span className="self-center text-md md:text-2xl font-semibold whitespace-nowrap dark:text-white">Compiler</span>
        </div>
        <p className='hidden md:flex text-gray-300 font-medium'>File / <span className='text-gray-400'>My first project</span></p>
        <i className='p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px]'><FiDownload /></i>
      </div>
    </>
  )
}

export default EditorNavbar