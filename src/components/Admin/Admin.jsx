import axios from "axios";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import AdminItem from "../AdminItem/AdminItem";

export default function Admin() {

    const dispatch = useDispatch();

    const feedback = useSelector(store => store.allResponses);

    useEffect(() => {
        getFeedback();
    }, []);

    const getFeedback = () => {
        axios.get('/api/feedback')
        .then((response) => {
            console.log('GET feedback successful', response.data)
            
            const action = {
                type: 'SET_RESPONSES',
                payload: response.data
            }
            dispatch(action);
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
                {feedback.map((response) => {
                    return (
                        <AdminItem response={response} />
                    );
                })}
            </tbody>
        </table>
    );
}