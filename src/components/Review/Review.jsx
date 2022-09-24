import axios from 'axios';

import Button from '@mui/material/Button'

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Review() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const responses = useSelector(store => store.responses);

    const submitResponses = () => {
        //axios function here
        axios.post('/api/feedback', responses)
        .then((response) => {
            console.log('Feedback POST request successful', response);
            
            const action = {
                type: 'SET_MESSAGE_THANKS'
            }
            dispatch(action);
            history.push('/');
        })
        .catch((error) => {
            alert('Feedback submission error');
            console.log(error)
        })
    }

    return (
        <section className="review"> 
            <h1>Review your responses</h1>
            <p>Feeling: {responses.feeling}</p>
            <p>Understanding: {responses.understanding}</p>
            <p>Support: {responses.supported}</p>
            <p>Additional Comments: {responses.comments}</p>
            <Button onClick={submitResponses}>Submit</Button>
        </section>
    )
}