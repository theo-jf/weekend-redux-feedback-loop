import axios from 'axios';

import Button from '@mui/material/Button'

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Review() {
    
    const history = useHistory();
    const responses = useSelector(store => store.responses);

    const submitResponses = () => {
        //axios function here

        // on .then
        history.push('/');
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