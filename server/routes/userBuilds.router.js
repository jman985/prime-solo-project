const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//GET route for logged-in USER builds

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', rejectUnauthenticated, req.user);
    pool.query(`SELECT build.id, build.name, image FROM "build"
    JOIN "components" ON "case_id" = "components"."id" WHERE build.user_id = $1 AND components.type = 'Case' ORDER BY build.id;`, [req.user.id])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for builds:', error);
            res.sendStatus(500);
        });
    
    });

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in post with:', req.user.id);
    const queryText = `INSERT INTO build (name, user_id, cpu_id, cooler_id, mobo_id, case_id, gpu_id, storage_id, memory_id,  psu_id )
    VALUES ('Untitled', $1, 1, 2, 3, 4, 5, 6, 7, 8) RETURNING id;`;
    pool.query(queryText, [req.user.id])
    .then(results => {
        res.send(results.rows[0]);
    }).catch(error => {
        console.log('error adding item', error);
        res.sendStatus(500);
    })
});


//DELETE route
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in delete with:', req.params.id);
    const queryText = `DELETE FROM build WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
    .then(response => {
        res.send(200);
    }).catch(error =>{
        console.log('error deleting item', error);
        res.sendStatus(500);
    })

});

module.exports = router;