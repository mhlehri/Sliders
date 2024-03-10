
'use client'

import CP from '@/ui/CP';
import React from 'react';
import { useState } from 'react';

const codeStr = `
import { useState } from 'react';

export const SquareCardPaginaiton2 = () => {
    const [pageNumber,setPageNumber] = useState(0)
    const page = 5 // Adjust the page numbers the way you want
    const updatePageNumber = (num)=>{
        if((num > (page - 1)) || (0 > num)){ return setPageNumber(0) }
        setPageNumber(num)
    }
    return (
    <div className='flex justify-center items-center  bg-white  shadow-lg  rounded-sm w-fit mx-auto'>
            {/* left arrow */}
        <div onClick={()=>{updatePageNumber(pageNumber - 1)}} className=' transition-all py-2  px-3 text-sm border-r  duration-200 cursor-pointer  p-2 rounded-md flex hover:bg-gray-200 items-center'>
          <svg className='w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
            Previous
        </div> 
        <div className='flex justify-center items-center  '>
            {[...Array(page).keys()].map((item,ind) => <div onClick={()=>{setPageNumber(item)}} className={\`cursor-pointer  text-sm  transition-all border-r border-l  duration-200 px-4 \${pageNumber === item ? 'bg-sky-500 text-white':'bg-white hover:bg-gray-200'}   font-semibold text-gray-700   py-[8px] \`} key={item}>
            {item + 1}
            </div>)}
        </div>
            {/* right arrow */}
        <div  onClick={()=>{updatePageNumber(pageNumber + 1)}} className=' transition-all py-2  px-3 text-sm duration-200 cursor-pointer border-l  rounded-md flex hover:bg-gray-200 items-center'>
              Next
              <svg className='w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#0284C7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
    </div>
    );
};

`



const SquareCardPaginaiton2 = () => {
    const [pageNumber,setPageNumber] = useState(0)
    const page = 5 // Adjust the page numbers the way you want
    const updatePageNumber = (num)=>{
        if((num > (page - 1)) || (0 > num)){ return setPageNumber(0) }
        setPageNumber(num)
    }
    return (
        <CP code={codeStr}>
        <div className='flex justify-center items-center  bg-white  shadow-lg  rounded-sm w-fit mx-auto'>
            {/* left arrow */}
            <div onClick={()=>{updatePageNumber(pageNumber - 1)}} className=' transition-all py-2  px-3 text-sm border-r  duration-200 cursor-pointer  p-2 rounded-md flex hover:bg-gray-200 items-center'>
          <svg className='w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
            Previous
            </div> 
            <div className='flex justify-center items-center  '>
                 {[...Array(page).keys()].map((item,ind) => <div onClick={()=>{setPageNumber(item)}} className={`cursor-pointer  text-sm  transition-all border-r border-l  duration-200 px-4 ${pageNumber === item ? 'bg-sky-500 text-white':'bg-white hover:bg-gray-200'}   font-semibold text-gray-700   py-[8px] `} key={item}>
                {item + 1}
              </div>)}
            </div>
            {/* right arrow */}
              <div  onClick={()=>{updatePageNumber(pageNumber + 1)}} className=' transition-all py-2  px-3 text-sm duration-200 cursor-pointer border-l  rounded-md flex hover:bg-gray-200 items-center'>
              Next
              <svg className='w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#0284C7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
        </div>
        </CP>
    );
};

export default SquareCardPaginaiton2;