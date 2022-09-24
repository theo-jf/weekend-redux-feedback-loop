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

router.get('/', (req, res) => {
    console.log('In GET /api/feedback');

    const queryText = `SELECT * FROM "feedback";`

    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Error GET /api/feedback', error);
    })
})

router.put('/:id', (req, res) => {
    console.log('In PUT /api/feedback');

    let updateId = req.params.id;

    const queryText = `UPDATE "feedback"
                            SET "flagged" = NOT "flagged"
                            WHERE "id" = $1;`
    
    pool.query(queryText, [updateId])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error in PUT /api/feedback', error);
    })
})

module.exports = router;