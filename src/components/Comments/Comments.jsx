import * as React from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        console.log(e.target.value);

        // If no comments, submit empty string
        const action = {
            type: 'ADD_COMMENTS',
            payload: (!e.target.value) ? '' : e.target.value
        }
        dispatch(action);
    }

    const toReview = () => {
        history.push('/review')
    }

    return (
        <section className="question">
            <FormControl>
            <FormLabel id="feeling">Anything else to add?</FormLabel>
                <TextField
                    fullWidth
                    id="commentsField"
                    label="Comments"
                    multiline
                    rows={5}
                    onChange={handleChange}
                />
            </FormControl>
            <Button onClick={toReview}>Review Answers</Button>
      </section>
    );
}