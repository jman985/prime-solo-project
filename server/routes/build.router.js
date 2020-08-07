const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');




//GET route to populate Builder Page with component choices

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.user);
    console.log('req.params:', req.params.id);

    pool.query(`SELECT "build"."id" AS build_id,
    "user_id",
    cpu.id AS cpu_id,
    cpu.name AS cpu_name,
    cpu.image AS cpu_image,
    cpu.details AS cpu_details,
    
    cooler.id AS cooler_id,
    cooler.name AS cooler_name,
    cooler.image AS cooler_image,
    cooler.details AS cooler_details,
    
    motherboard.id AS mobo_id,
    motherboard.name AS mobo_name,
    motherboard.image AS mobo_image,
    motherboard.details AS mobo_details,
    
    storage.id AS storage_id,
    storage.name AS storage_name,
    storage.image AS storage_image,
    storage.details AS storage_details,
    
    gpu.id AS gpu_id,
    gpu.name AS gpu_name,
    gpu.image AS gpu_image,
    gpu.details AS gpu_details,
    
    "case".id AS case_id,
    "case".name AS case_name,
    "case".image AS case_image,
    "case".details AS case_details,
    
    memory.id AS memory_id,
    memory.name AS memory_name,
    memory.image AS memory_image,
    memory.details AS memory_details,
    
    psu.id AS psu_id,
    psu.name AS psu_name,
    psu.image AS psu_image,
    psu.details AS psu_details
    
    FROM "build"
    JOIN "cpu" ON "cpu_id" = "cpu"."id" 
    JOIN "motherboard" ON "mobo_id" = "motherboard"."id"
    JOIN "cooler" ON "cooler_id" = "cooler"."id"
    JOIN "gpu" ON "gpu_id" = "gpu"."id"
    JOIN "case" ON "case_id" = "case"."id"
    JOIN "storage" ON "storage_id" = "storage"."id"
    JOIN "memory" ON "memory_id" = "memory"."id"
    JOIN "psu" ON "psu_id" = "psu"."id" WHERE build.id= $1;`, [req.params.id])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for components:', error);
            res.sendStatus(500);
        });
});


module.exports = router;