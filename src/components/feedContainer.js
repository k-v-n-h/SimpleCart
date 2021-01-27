import React from 'react'
import Divider from '@material-ui/core/Divider';

class FeedContainer extends React.Component {
    render() {
        return (
            <div class="bg-white-300 justify-self-end pl-64 pr-12">
                <div className='grid grid-cols-3 gap-24 justify-items-center'>
                    <div className='text-gray-700 '>User</div>
                    <div className='text-gray-700 '>Contents</div>
                    <div className='text-gray-700 '>Total</div>
                </div>
                <div class="text-gray-700 bg-gray-100 rounded-md shadow-lg">
                    <div className='justify-items-start p-2 px-2 pb-24'>
                        <div className='bg-green-200 rounded w-20'>Recovered</div>
                    </div>
                    <Divider/>
                    <div className='justify-items-start p-2 px-2 pb-24'>
                        <div className='bg-blue-200 rounded w-24'>Items in cart</div>
                    </div>
                    <Divider/>
                    <div className='justify-items-start p-2 px-2 pb-24'>
                        <div className='bg-green-200 rounded w-20'>Recovered</div>
                    </div>
                    <Divider/>
                    <div className='justify-items-start p-2 px-2 pb-24'>
                        <div className='bg-blue-200 rounded w-24'>Items in cart</div>
                    </div>
                    <Divider/>
                    <div className='justify-items-start p-2 px-2 pb-24'>
                        <div className='bg-green-200 rounded w-20'>Recovered</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedContainer