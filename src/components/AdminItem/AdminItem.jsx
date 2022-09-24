import { useState } from 'react';
import axios from 'axios';

export default function AdminItem({response}) {

    // const [flagged, setFlagged] = useState(false);

    const flagResponse = () => {
        axios.put(`/api/feedback/${response.id}`)
        .then((response) => {
            console.log('Flag successful', response);
        })
        .catch((error) => {
            console.log(error);
            alert('Error flagging response');
        })
    }   

    return (
        <tr key={response.id} 
            className={response.flagged ? 'flagged' : 'notFlagged'}>
            <td>{response.feeling}</td>
            <td>{response.understanding}</td>
            <td>{response.support}</td>
            <td>{response.comments}</td>
            <td onClick={flagResponse}>flag</td>
            <td>delete</td>
        </tr>
    );
}