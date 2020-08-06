const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//GET route for logged-in USER builds

router.get('/', (req, res) => {
    console.log('req.user:', rejectUnauthenticated, req.user);
    pool.query(`SELECT "build"."id", "build"."name", "build"."user_id",
    "case".brand AS "case_brand",
    "case".name AS "case_name",
    "case".image AS "case_image"
    FROM "build"
    JOIN "cpu" ON "cpu_id" = "cpu"."id"
    JOIN "motherboard" ON "mobo_id" = "motherboard"."id"
    JOIN "cooler" ON "cooler_id" = "cooler"."id"
    JOIN "gpu" ON "gpu_id" = "gpu"."id"
    JOIN "case" ON "case_id" = "case"."id"
    JOIN "storage" ON "storage_id" = "storage"."id"
    JOIN "memory" ON "memory_id" = "memory"."id"
    JOIN "psu" ON "psu_id" = "psu"."id" WHERE build.user_id = $1;`, [req.user.id])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for builds:', error);
            res.sendStatus(500);
        });
    
    });

/**
 * POST route template
 */
router.post('/', (req, res) => {

});


//DELETE route
router.delete('/:id', (req, res) => {
    console.log('in delete with:', req.params.id);
    const queryText = `DELETE FROM build WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
    .then(response => {
        res.sendStatus(200);
    }).catch(error =>{
        console.log('error deleting item', error);
        res.sendStatus(500);
    })

});

module.exports = router;