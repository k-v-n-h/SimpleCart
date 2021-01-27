import React from 'react'
import Navigation from './navigation'


class Header extends React.Component {
    render() {
        
        return (
            <header className=' border-b p-3 flex justify-between'>
                <div className='self-center p-3 font-bold'>Simple call</div>
                <Navigation />
            </header>

        );
    }
}

export default Header