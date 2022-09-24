import axios from "axios";
import { useState, useEffect } from "react";

import AdminItem from "../AdminItem/AdminItem";

export default function Admin() {

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        getFeedback();
    }, []);

    const getFeedback = () => {
        axios.get('/api/feedback')
        .then((response) => {
            console.log('GET feedback successful', response.data)
            setFeedback(response.data);
        })
        .catch((error) => {
            console.log(error);
            alert('Error fetching feedback');
        })
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Flag</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {feedback.map(response => {
                    <AdminItem response={response} />
                })}
            </tbody>
        </table>
    );
}