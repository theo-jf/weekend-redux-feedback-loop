import React from 'react';
import axios from 'axios';
import './App.css';



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
// 


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
