const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//GET route for logged-in USER builds

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', rejectUnauthenticated, req.user);

    pool.query(`SELECT build.id,
    build.name as build_name,
    build.case_id AS case_id,
    "case".image AS image, 
    "case".name AS "case_name",
    cpu.id AS "cpu_id",
    cpu.name AS "cpu_name",
    cooler.id AS "cooler_id",
    cooler.name AS "cooler_name",
    mobo.id AS "mobo_id",
    mobo.name AS "mobo_name",
    gpu.id AS gpu_id,
    gpu.name AS "gpu_name",
    storage.id AS storage_id,
    storage.name AS "storage_name",
    memory.id AS memory_id,
    memory.name AS "memory_name",
    psu.id AS psu_id,
    psu.name AS "psu_name"
    FROM "build"
    INNER JOIN "components" "case" ON "case_id" = "case"."id"
    INNER JOIN "components" cpu ON "cpu_id" = "cpu"."id"
    INNER JOIN "components" cooler ON "cooler_id" = "cooler"."id"
    INNER JOIN "components" mobo ON "mobo_id" = "mobo"."id"
    INNER JOIN "components" gpu ON "gpu_id" = "gpu"."id"
    INNER JOIN "components" "storage" ON "storage_id" = "storage"."id"
    INNER JOIN "components" memory ON "memory_id" = "memory"."id"
    INNER JOIN "components" psu ON "psu_id" = "psu"."id" WHERE build.user_id = $1 ORDER BY build.name;`, [req.user.id])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for builds:', error);
            res.sendStatus(500);
        });
    
    });

//POST route template to add a new build, populate with default values
 
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in post with:', req.user.id);
    const queryText = `INSERT INTO build (name, user_id, cpu_id, cooler_id, mobo_id, case_id, gpu_id, storage_id, memory_id,  psu_id )
    VALUES (' ', $1, 1, 2, 3, 4, 5, 6, 7, 8) RETURNING id;`;
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