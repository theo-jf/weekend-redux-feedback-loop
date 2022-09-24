import React from 'react';
import axios from 'axios';
import './App.css';

// React / Redux imports
import { useDispatch, useSelector } from 'react-redux';
// Router imports
import { HashRouter as Router, Route, Link} from 'react-router-dom';
// Component imports



// TODO BASE-MODE:
// Submitted component on load
//       Conditional 'Welcome!' or 'Thank You for Your Submission!'
//       Use the Store for this boolean --> changed on click in Review
//       Leave new feedback button leads to Feedback component
//
// Feedback component houses all questions and inputs
//       First route loaded is feedback/feeling
//       Next brings us to feedback/understanding etc.
//       Each next click stores that answer in Store
//       Input required for all except Comments
//
// When next button in the Comments component is clicked
//       Display all answers from the Store in Review
//       CANNOT EDIT OR GO BACK FOR BASE-MODE
//            But, look up local storage in React/Redux
//
// In Review, once submit is clicked
//       Submit an answer object through POST to the server / database
//       Change that one boolean so 'Thanks' appears in Submitted
//       Go back to submitted!

// TODO STRETCH-MODE:
// Edit submission
//       Click on value in Review to go back to previous step?
//            Just repeats the loop from there
//            Make it clear that they're returning to a step -> 
//            The whole questionnaire will repeat
//                  Cache data incase of reload? reload warning
//                  Force back to start on page reload?
//
// Material UI
// 
// Admin page
//       GET route for all submission
//       Display in a table
//       Conditional rendering for 'flagged' (true in db) value
//       DELETE route for submission uses key from table row
//           Separate component in .map for each entry
//
// Heroku!


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
