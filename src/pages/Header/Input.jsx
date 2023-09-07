import React from 'react'
import search from "../../assets/search.png"
 function Input() {
  return (
    <div className='relative'>
        <input
         type='text'
         placeholder='Nhập tìm kiếm'
         className='block border-2 border-solid'
        />
        <div className='absolute top-[50%] -translate-y-[50%] left-1'>
            <img src={search} alt=''/>
        </div>
    </div>
  )
}
export default Input
