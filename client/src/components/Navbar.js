import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <nav className='border-b-4 border-green-500 text-center fixed top-0 bg-green-400 font-bold w-full text-lg text-white'>
                <ul>
                    <li className='inline-block py-4'>
                        <Link to="/" className='pl-6 pr-8'>Home</Link>
                        <Link to="/about" className='pl-6 pr-8'>About</Link>
                        <Link to="/articles" className='pl-6 pr-8'>Articles</Link>
                    </li>
                </ul>
                
            </nav>
        );
    }
}

export default Navbar;