import { Button } from '@material-ui/core';
import React from 'react'


class PushButtons extends React.Component {
    render() {

        // const BarStyling = {border: "transparent", padding: "1.5rem", outline: 'none' };
        return (
            <div class="grid grid-cols-4 gap-16 justify-items-auto h-64 pt-10 pr-32 pb-12">
                <div class='flex justify-center px-1 py-2'></div>
                <Button class='bg-gray-200 rounded-lg shadow-lg focus:outline-none'>
                    <div class="text-gray-700 bg-gray-200 flex justify-center items-center px-4 py-2">Voice</div>
                </Button>
                <Button class='bg-gray-200 rounded-lg shadow-lg focus:outline-none'>
                    <div class="text-gray-700 bg-gray-200 flex justify-center items-center px-4 py-2">SMS</div>
                </Button>
                <Button class='bg-gray-200 rounded-lg shadow-lg focus:outline-none'>
                    <div class="text-gray-700 bg-gray-200 flex justify-center items-center px-4 py-2">Email</div>
                </Button>
            </div>
        );
    }
}

export default PushButtons