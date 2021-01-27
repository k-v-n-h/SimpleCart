import React, {Component} from 'react'
import {
    Link
} from 'react-router-dom';
import HomePage from '../views/homepage'
import { useTransition, animated } from 'react-spring'
import {progress} from "@stickyroll/decorators";

class DashMenu extends Component {

    //     {
    //     transitions.map(({ item, props, key }) =>
    //         <animated.div key={key} style={props}
    //         className='' onClick={}>

    //         </animated.div>
    //     )
    // }

    render() {

        return (
            <div className='fixed bg-white rounded-r-lg top-0 left-0 w-2/12 h-full z-50 shadow-2xl'>
                <aside className='pl-5'>
                    <section className=' items-center py-3'>
                        <span className=' object-top text-blue-400 text-xl pt-10'>
                            SimpleCart
                        </span>
                        <div className='pt-10 '>
                            <ul>
                                <li>
                                    <div className='bg-blue-400 bg-opacity-25 pl-3 rounded-l'>
                                        <Link
                                            to='/'
                                            className='text-black py-2 border-b block'
                                        // onClick={props.closeMenu}
                                        >Dashboard</Link>
                                    </div>
                                </li>
                                <li>
                                    <Link
                                        to='/about'
                                        className='text-black py-2 border-b block '
                                    // onClick={props.closeMenu}
                                    >Flows</Link>
                                </li>
                                <li>
                                    <Link
                                        to='/products'
                                        className='text-black py-2 border-b block '
                                    // onClick={props.closeMenu}
                                    >Campaigns</Link>
                                </li>
                                <li>
                                    <Link
                                        to='/metrics'
                                        className='text-black py-2 border-b block '
                                    // onClick={props.closeMenu}
                                    >Metrics</Link>
                                </li>
                            </ul>
                        </div>
                        <div>{this.props.ScrollProgress}</div>
                    </section>
                </aside>
            </div >
        )
    }
}



export default DashMenu