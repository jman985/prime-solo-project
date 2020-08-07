const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');




//GET route to populate Builder Page with component choices

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.user);
    console.log('req.params:', req.params.id);

    pool.query(`SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.description AS description
    FROM "build"
    JOIN "components" ON "cpu_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.description AS description
    FROM "build"
    JOIN "components" ON "cooler_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.description AS description
    FROM "build"
    JOIN "components" ON "mobo_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.description AS description
    FROM "build"
    JOIN "components" ON "case_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.description AS description
    FROM "build"
    JOIN "components" ON "gpu_id" = "components"."id" WHERE user_id = 1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.description AS description
    FROM "build"
    JOIN "components" ON "storage_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.description AS description
    FROM "build"
    JOIN "components" ON "memory_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.description AS description
    FROM "build"
    JOIN "components" ON "psu_id" = "components"."id" WHERE user_id = $1 AND build.id = $2 ORDER BY id;`, [req.user.id, req.params.id])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for components:', error);
            res.sendStatus(500);
        });
});


module.exports = router;