import * as React from 'react';
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Supported() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        console.log(e.target.value);
        const action = {
            type: 'ADD_SUPPORTED',
            payload: e.target.value
        }
        dispatch(action);
    }

    const toComments = () => {
        history.push('/feedback/api/comments')
    }

    return (
        <section className="question">
            <FormControl>
            <FormLabel id="feeling">How well are you being supported?</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    >
                    <FormControlLabel value="1" onChange={handleChange} control={<Radio />} label="1" />
                    <FormControlLabel value="2" onChange={handleChange} control={<Radio />} label="2" />
                    <FormControlLabel value="3" onChange={handleChange} control={<Radio />} label="3" />
                    <FormControlLabel value="4" onChange={handleChange} control={<Radio />} label="4" />
                    <FormControlLabel value="5" onChange={handleChange} control={<Radio />} label="5" />
                    </RadioGroup>
            </FormControl>
            <Button onClick={toComments}>Next</Button>
      </section>
    );
}