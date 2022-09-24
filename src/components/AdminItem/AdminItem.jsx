import axios from 'axios';

export default function AdminItem({response, getFeedback}) {

    const flagResponse = () => {
        axios.put(`/api/feedback/${response.id}`)
        .then((response) => {
            console.log('Flag successful', response);
            getFeedback();
        })
        .catch((error) => {
            console.log(error);
            alert('Error flagging response');
        })
    }  
    
    const deleteResponse = () => {
        axios.delete(`/api/feedback/${response.id}`)
        .then((response) => {
            console.log('delete successful', response);
            getFeedback();
        })
        .catch((error) => {
            console.log(error);
            alert('Error deleting response');
        })
    }

    return (
        <tr className={response.flagged ? 'flagged' : 'notFlagged'}>
            <td>{response.feeling}</td>
            <td>{response.understanding}</td>
            <td>{response.support}</td>
            <td>{response.comments}</td>
            <td><button onClick={flagResponse}>{response.flagged ? 'Remove Flag' : 'Flag'}</button></td>
            <td><button onClick={deleteResponse}>Delete</button></td>
            <td>{(response.date).split('T')[0]}</td>
        </tr>
    );
}