import React from 'react';
import { A } from 'hookrouter';

export default function NavBar() {
    return (
        <div className='navigation-container'>
            <div className='nav-link-wrapper'>
                <div className='nav-link'>
                    <A className='link' href='/'>
                        Home
                    </A>
                </div>

                <div className='nav-link'>
                    <A className='link' href='/add-book'>
                        Add-Book
                    </A>
                </div>

                <div className='nav-link'>
                    <A className='link' href='/sign-up'>
                        Sign-up
                    </A>
                </div>

                <div className='nav-link'>
                    <A className='link' href='/login'>
                        Login
                    </A>
                </div>
            </div>
        </div>
    );
} 