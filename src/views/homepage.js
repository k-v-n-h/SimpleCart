import React from 'react'
import HelloNumber from '../components/helloNumber'
import PhoneInput from '../components/PhoneInput'
import PostForm from '../components/PhoneInput'
import DashMenu from '../components/DashMenu'
import SearchBar from '../components/searchBar'
import PushButtons from '../components/dashPushButtons'
import FeedContainer from '../components/feedContainer'
import { Stickyroll } from '@stickyroll/stickyroll';
import PageCounter from '../pageCounter';


// const headlines = [
//     <SearchBar />,
//     <PushButtons />,
//     <FeedContainer />,
//     <PostForm />
// ]

function HomePage() {
    // return (
    //     <Stickyroll  >
    //         {({progress}) => {

                return (
                    <div>
                        {/* <div className='text-center'>
                            <PageCounter/>
                            <br/>
                            <strong>page {page}</strong> of <strong>{pages}</strong>
                            <br />
                        Progress: <strong>{progress}</strong>
                            <h1>{headlines[pageIndex]}</h1>
                            <br/>

                        </div> */}
                        <SearchBar />
                        <PushButtons />
                        <FeedContainer />
                        {/* <SearchBar/>
                        <FeedContainer/> */}
                        <PhoneInput />
                        
                    </div>
                );
        //     }}
        // </Stickyroll>
    // )
};


export default HomePage