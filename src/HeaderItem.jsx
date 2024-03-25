import React from 'react'

const HeaderItem = ({ name, Icon }) => {
    return (
        <div className='text-white flex items-center gap-x-2 hover:text-blue-500 transition duration-500 hover:underline underline-offset-8  duration-400 px-5 mb-3'>
            <Icon />
            <h2 className=''>{name}</h2>
        </div>

    )
}

export default HeaderItem