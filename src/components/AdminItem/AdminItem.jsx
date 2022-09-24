import { useState } from 'react';
import axios from 'axios';

export default function AdminItem({response}) {

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
        <tr className={response.flagged ? 'flagged' : 'notFlagged'}>
            <td>{response.feeling}</td>
            <td>{response.understanding}</td>
            <td>{response.support}</td>
            <td>{response.comments}</td>
            <td><button onClick={flagResponse}>Flag</button></td>
            <td><button>Delete</button></td>
        </tr>
    );
}