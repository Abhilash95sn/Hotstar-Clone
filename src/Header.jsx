import HeaderItem from './HeaderItem';
import logo from '/logo-d-plus.webp'
import profile from '/png-transparent-head-the-dummy-avatar-man-tie-jacket-user-thumbnail.png'
import React, { useState } from 'react'
import {
    AiFillHome,
    AiOutlineSearch,
    AiOutlineStar,
    AiFillPlayCircle,
    AiOutlinePlus,

} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
const Header = () => {
    const [toggle, setToggle] = useState(false)
    const menu = [
        {
            name: 'HOME',
            Icon: AiFillHome
        },
        {
            name: 'SEARCH',
            Icon: AiOutlineSearch
        },
        {
            name: 'ORIGINALS',
            Icon: AiOutlineStar
        },
        {
            name: 'MOVIES',
            Icon: AiFillPlayCircle
        },
        {
            name: 'WATCHLIST',
            Icon: AiOutlinePlus
        },
    ]

    return (
        <>
            <div className='w-full'>
                <div className=' w-[90%] mx-auto flex '>
                    <div className='w-[50%]'><img src={logo} className='w-[40%] md:w-[115px]   object-cover' /></div>

                    <div className='hidden md:flex p-[10px] justify-between mx-10 '>
                        {menu.map((item) => (
                            <HeaderItem name={item.name} Icon={item.Icon} />
                        ))}
                    </div>
                    <div className='md:hidden  w-[70%] flex p-[10px] justify-between mx-5 '>
                        {menu.map((item, index) => index < 3 && (
                            <HeaderItem name={''} Icon={item.Icon} />
                        ))}
                        <div className='md:hidden flex items-center ' onClick={() => setToggle(!toggle)}>
                            <HeaderItem name={''} Icon={BsThreeDotsVertical} />
                            {toggle &&
                                <div className='absolute mt-48 bg-black border-[1px] py-5 gap-5 flra'>
                                    {menu.map((item, index) => index > 2 && (
                                        <HeaderItem name={item.name} Icon={item.Icon} />
                                    ))}
                                </div>
                            }
                        </div>
                    </div>

                    <div className=' flex items-center w-16 '>
                        <img src={
                            profile
                        } className='rounded-full w-12 hover:w-14 transition duration-500 ease-in-out ' /></div>

                </div>
            </div>
        </>
    )
}

export default Header
