import React from 'react'

class HelloNumber extends React.Component {
    render() {
        return (
            <form>
                <h1 className='p-5 text-center'>{this.props.name}</h1>
                {/* <input input="number" className='bg-grey'></input> */}
            </form>

        );
    }
}

export default HelloNumber