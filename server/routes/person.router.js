const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const encryptLib = require('../modules/encryption');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    let queryText = (`SELECT * FROM "person" ORDER BY "id" DESC;`);
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
router.post('/', rejectUnauthenticated, (req, res) => {
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
router.delete('/:id', rejectUnauthenticated, (req, res) => {
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

// Update Edit School Info
router.put('/:id', rejectUnauthenticated, function(req, res){
    const id = req.params.id;
    console.log('hit put');
    const person = req.body; // This the data we sent
    const password = encryptLib.encryptPassword(person.password);
    const query = `UPDATE "person" SET "username" = $2, "password" = $3, "school_name" = $4 WHERE id = $1;`
    console.log('yeahah:', req.body);
    pool.query(query, [id, person.username, password, person.school_name])
    .then((result)=>{
        console.log(result);
        res.sendStatus(201);
    }).catch((err)=>{
        console.log('hit query',err);
        res.sendStatus( 500);
    })
})

//Update school active
router.put('/active/:id', rejectUnauthenticated, function(req, res){
    const id = req.params.id;
    console.log('hit put');
    const person = req.body; // This the data we sent
    const query = `UPDATE "person" SET "active" = NOT "active" WHERE id = $1;`
    console.log('yeahah:', req.body);
    pool.query(query, [id])
    .then((result)=>{
        console.log(result);
        res.sendStatus(201);
    }).catch((err)=>{
        console.log('hit query',err);
        res.sendStatus( 500);
    })
})
module.exports = router;
