const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const encryptLib = require('../modules/encryption');


/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = (`SELECT * FROM "person";`);
    pool.query(queryText).then((result) => {
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const person = req.body;
    const password = encryptLib.encryptPassword(req.body.password);
    const queryText = `INSERT INTO "person" ("username", "password", "school_name", "creation_date") VALUES ($1, $2, $3, current_date);`;
    pool.query(queryText, [person.username, password, person.school_name])
    .then((result) => {
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

//  delete route
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const queryText = 'DELETE FROM "person" WHERE id = $1;';
    pool.query(queryText, [id])
    .then(result => {
        res.sendStatus(202);
    })
    .catch(error => {
        console.log('error in delete', error);
        res.sendStatus(500);
    })
})

// PUT
router.put('/:username', function(req, res){
    const person = req.body; // This the data we sent
    const query = `UPDATE "person" SET active = $2 WHERE username = $1;`
    console.log('yeahah:', req.body);
    pool.query(query, [person.username, person.active])
    .then((result)=>{
        console.log(result);
        res.sendStatus(201);
    }).catch((err)=>{
        console.log('hit query',err);
        res.sendStatus( 500);
    })
})
module.exports = router;