import React from 'react'

const HeaderItem = ({ name, Icon }) => {
    return (
        <div className='text-white flex items-center gap-x-2 hover:text-blue-500 transition duration-500'>
            <Icon />
            <h2>{name}</h2>
        </div>
    )
}

export default HeaderItem