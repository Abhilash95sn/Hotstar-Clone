import HeaderItem from './HeaderItem';
import logo from './../public/logo-d-plus.webp'
import React from 'react'
import {
    AiFillHome,
    AiOutlineSearch,
    AiOutlineStar,
    AiFillPlayCircle,
    AiOutlinePlus,

} from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";

const Header = () => {
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
                    <div className='w-[70%] flex p-[10px] justify-between mx-5 hover:'>
                        {menu.map((item) => (
                            <HeaderItem name={item.name} Icon={item.Icon} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header
