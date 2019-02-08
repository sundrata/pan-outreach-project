const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    let queryText = (`SELECT lesson_plan.*, category.name AS category_name FROM "lesson_plan" left JOIN "category" ON "lesson_plan".category_id = "category".id ORDER BY "id" DESC;`);
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
    const lesson = req.body;
    const queryText = `INSERT INTO "lesson_plan" ("name", "category_id", "url") VALUES ($1, $2, $3);`;
    pool.query(queryText, [lesson.name, lesson.category_id, lesson.url])
    .then((result) => {
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
    const queryText = 'DELETE FROM "lesson_plan" WHERE id = $1;';
    pool.query(queryText, [id])
    .then(result => {
        res.sendStatus(202);
    })
    .catch(error => {
        console.log('error in delete', error);
        res.sendStatus(500);
    })
})
module.exports = router;