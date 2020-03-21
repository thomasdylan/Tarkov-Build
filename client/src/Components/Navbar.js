import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <h1>Tarkov Builds</h1>
                <ul>
                    <li><Link to='/browse'>Browse</Link></li>
                    <li><Link to='/create'>Create</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;