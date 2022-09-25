import * as React from 'react';
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState(' ');

    const handleChange = (e) => {
        setValue(e.target.value);
        setHelperText(' ');
        setError(false);
        console.log(e.target.value);
        const action = {
            type: 'ADD_UNDERSTANDING',
            payload: e.target.value
        }
        dispatch(action);
    }

    const toFeeling = () => {
        history.push('/feedback/feeling');
    }

    const toSupport = () => {
        if (!value) {
            setHelperText('Response required');
            setError(true);
        } else if (value) {
            history.push('/feedback/support')
        }
    }

    return (
        <section className="question">
            <FormControl error={error}>
            <FormLabel id="questionTitle">How well are you understanding the material?</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="buttons"
                    >
                    <FormControlLabel value="1" onChange={handleChange} control={<Radio />} label="1" />
                    <FormControlLabel value="2" onChange={handleChange} control={<Radio />} label="2" />
                    <FormControlLabel value="3" onChange={handleChange} control={<Radio />} label="3" />
                    <FormControlLabel value="4" onChange={handleChange} control={<Radio />} label="4" />
                    <FormControlLabel value="5" onChange={handleChange} control={<Radio />} label="5" />
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <Button onClick={toFeeling}>Back</Button>
            <Button onClick={toSupport}>Next</Button>
      </section>
    );
}