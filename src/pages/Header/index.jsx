import React, { } from 'react'
import logo from "../../assets/logo.png"
import iconSearch from "../../assets/search.png"
import iconCart from "../../assets/add_shopping_cart.png"
import iconAccount from "../../assets/account_circle.png"
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate();

  return (
    <div className='bg-[#515154] flex justify-around items-center '>
        <div className='w-[10%] p-1 ' >
            <img src={logo} alt=''/>
        </div>
        <nav>
        <ul  className='flex text-white '>
                <li className='py-[10px] px-[20px] hover:bg-slate-500 ' onClick={()=>navigate("/")}>
                 Home
                </li>
                <li className='py-[10px] px-[20px] hover:bg-slate-500 ' onClick={()=>navigate("/iphone")}>
                  iPhone
                </li>
                <li className='py-[10px] px-[20px] hover:bg-slate-500 ' onClick={()=>navigate("/ipad")} >
                   iPad
                </li>
                <li className='py-[10px] px-[20px] hover:bg-slate-500 '>
                Mac
                </li>
                <li className='py-[10px] px-[20px] hover:bg-slate-500 '>
                Watch
                </li>
                <li className='py-[10px] px-[20px] hover:bg-slate-500 '>
                Âm thanh
                </li>
                <li className='py-[10px] px-[20px] hover:bg-slate-500 '>
                Phụ kiện
                </li>
                <li className='py-[10px] px-[20px] hover:bg-slate-500 '>
                Dịch vụ
                </li>
                <li className='py-[10px] px-[20px] hover:bg-slate-500 '>
                Tin tức
                </li>
                <li className='py-[10px] px-[20px] hover:bg-slate-500 '>
                Khuyến mãi
                </li>
            </ul>
        </nav>
        <div className='relative '>
            <input
            placeholder='Nhập vào ?'
            className=' block h-[40px] w-full border-2 border-black rounded-md pl-[40px]'
            />
            <img src={iconSearch} alt=''
            className='absolute top-[50%] -translate-y-[50%] left-1 p-2 '
            />
        </div>
        <div className='flex justify-between items-center gap-2'>
           <div>
           <img src={iconCart} alt=''/>
           </div>
            <div>
            <img src={iconAccount} alt=''/>
            </div>
        </div>
       
    </div>
  )
}
