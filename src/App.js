import React, { Component } from 'react';
import HelloNumber from './components/helloNumber'
import Header from './components/header'
import Footer from './components/footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './views/homepage'
import AboutPage from './views/about'
import ProductPage from './views/productPage'
import { Stickyroll } from '@stickyroll/stickyroll';
import { useStickyroll } from '@stickyroll/hooks';
import './index.css';
import PageCounter from "./pageCounter";
import ProgressCounter from './ProgressCounter';
import Skip from './components/skipScroll/skip';
import DashMenu from './components/DashMenu'
import SearchBar from './components/searchBar'
import PushButtons from './components/dashPushButtons'
import FeedContainer from './components/feedContainer'
import PostForm from './components/PhoneInput'

const headlines = [
  // <HomePage/>,
  <SearchBar />,
  <PushButtons />,
  <FeedContainer />,
  <PostForm />
]

// function App() {
//   // const className = progress =>
//   // `custom-trigger custom-trigger--${Math.round(progress * 3)}`
//   return (
//     <Stickyroll pages={headlines}factor={0.5} anchors="">
//       {({ page, pageIndex, pages, progress, context }) => {
//         var dashProgress = progress;
//         return (
//           <div>
//             <Router>
//               <Switch>
//                 <Route exact path='/'>
//                   <DashMenu ScrollProgress={dashProgress} />
//                 </Route>
//               </Switch>
//             </Router>
//             {/* <div>{headlines[context.pageIndex]}</div> */}
//             <div className='text-center pt-12'>
//               <strong>{page}</strong> of <strong>{pages}</strong>
//               <br />
//                 Progress: <strong>{progress}</strong>
//             </div>
//           </div>
//         );
//       }}
//     </Stickyroll>
//   )
// }

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/'>
            <DashMenu />
            <HomePage/>
            <Stickyroll pages={headlines}>
              {({ page, pageIndex, pages, progress }) => {
                return (
                  <div>
                    <div className=''>
                      {headlines[pageIndex]}
                    </div>
                  </div>
                );
              }}
            </Stickyroll>
          </Route>
          <Route path='/about'>
            <DashMenu/>
            <AboutPage />
          </Route>
          <Route path='/products'>
            <DashMenu/>
            <ProductPage />
          </Route>
          <Route path='/api/call'>
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
