import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Submitted() {

    const dispatch = useDispatch();

    const history = useHistory();

    const message = useSelector(store => store.message);

    const reset = () => {
        const action = {
            type: 'RESET_STORE',
        }
        dispatch(action);
        history.push('/feedback/api/feeling');
    }

    return (
        <>
            <h1>{message}</h1>
            <Button onClick={reset}>Leave New Feedback</Button>
        </>
    );
}