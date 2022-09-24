const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('In POST /api/feedback');

    let newFeedback = req.body;

    const queryText = `INSERT INTO "feedback" 
                            ("feeling", "understanding", "support", "comments")
                            VALUES
                            ($1, $2, $3, $4);`

    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.supported, newFeedback.comments])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error POST /api/feedback', error)
        res.sendStatus(500);
    });
})

module.exports = router;