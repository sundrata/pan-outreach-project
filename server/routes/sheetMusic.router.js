const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('sheet music get hit');
    const queryString =`SELECT * from "sheet_music" ORDER BY "name" ASC;`;
    pool.query(queryString)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    queryString = `DELETE FROM "sheet_music" WHERE "id" = $1;`;
    let id = req.params.id
    pool.query(queryString, [id])
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('error in delete music:', error);
            res.sendStatus(500);
        })

});

module.exports = router;