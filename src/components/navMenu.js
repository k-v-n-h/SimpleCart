import React, { useState } from 'react'
import {
    Link
  } from 'react-router-dom';

function NavMenu(props) {
    return (
        <div>
            <div className='font-bold py-3 border-b'>
                Menu
                </div>
            <ul>
                <li>
                    <Link
                        to='/'
                        className='text-black py-2 border-b block'
                        onClick={props.closeMenu}
                    >Home</Link>
                </li>
                <li>
                    <Link
                        to='/about'
                        className='text-black py-2 border-b block '
                        onClick={props.closeMenu}
                    >about</Link>
                </li>
                <li>
                    <Link
                        to='/products'
                        className='text-black py-2 border-b block '
                        onClick={props.closeMenu}
                    >Products</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu