const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('sheet music get hit');
    const queryString =`SELECT * from "sheet_music" ORDER BY "id" ASC;`;
    pool.query(queryString)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.get('/search/:instrument/:difficulty/:name', rejectUnauthenticated, (req, res) => {
    console.log(`search feature`, req.params.instrument, req.params.difficulty, req.params.name);
    const instrument = req.params.instrument;
    const difficulty = req.params.difficulty;
    const name = req.params.name;
    console.log(typeof name);
    
    const queryString = `SELECT * from "sheet_music" WHERE name = '${name}' ;`;
    console.log(queryString);
    
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