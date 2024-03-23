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
            name: 'STAR',
            Icon: AiOutlineStar
        },
        {
            name: 'PLAYCIRCLE',
            Icon: AiFillPlayCircle
        },
        {
            name: 'OUTLINE+',
            Icon: AiOutlinePlus
        },
    ]
    return (
        <>
            <div className='w-full'>
                <div className='90%'>
                    <img src={logo} className='w-[80px] md:w-[115px]   object-cover' />
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.Icon} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Header
