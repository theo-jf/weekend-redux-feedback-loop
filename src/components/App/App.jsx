import React from 'react';
import axios from 'axios';
import './App.css';

// React / Redux imports
import { useDispatch, useSelector } from 'react-redux';
// Router imports
import { HashRouter as Router, Route, Link} from 'react-router-dom';
// Component imports
import Header from '../Header/Header';
import Submitted from '../Submitted/Submitted';
import Feedback from '../Feedback/Feedback';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';

function App() {

  return (
    <div className='App'>
      <Router>
        <Route exact path ="/">
          <Header />
          <Submitted />
        </Route>
        <Route path ="/feedback">
          <Feedback />
          <Route exact path ="/feedback/feeling">
            <Feeling />
          </Route>
          <Route exact path ="/feedback/understanding">
            <Understanding />
          </Route>
          <Route exact path ="/feedback/support">
            <Supported />
          </Route>
          <Route exact path ="/feedback/comments">
            <Comments />
          </Route>
          <Route exact path ="/feedback/review">
            <Review />
          </Route>
        </Route>
        <Route exact path ="/admin">
          <Header />
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
