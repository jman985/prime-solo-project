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
    components.details AS details
    FROM "build"
    JOIN "components" ON "cpu_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.details AS details
    FROM "build"
    JOIN "components" ON "cooler_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.details AS details
    FROM "build"
    JOIN "components" ON "mobo_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.details AS details
    FROM "build"
    JOIN "components" ON "case_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.details AS details
    FROM "build"
    JOIN "components" ON "gpu_id" = "components"."id" WHERE user_id = 1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.details AS details
    FROM "build"
    JOIN "components" ON "storage_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.details AS details
    FROM "build"
    JOIN "components" ON "memory_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.details AS details
    FROM "build"
    JOIN "components" ON "psu_id" = "components"."id" WHERE user_id = $1 AND build.id = $2 ORDER BY id;`, [req.user.id, req.params.id])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for components:', error);
            res.sendStatus(500);
        });
});


router.put('/cpu', rejectUnauthenticated, (req, res) => {
  console.log('this is the req.body', req.body);
  
    pool.query(`UPDATE "build"
    SET "cpu_id" = $1
    WHERE "build"."id" = $2;`,[req.body.component_id, req.body.build_id])
    // pool.query(queryText, queryInput)
    .then(() => res.sendStatus(201))
    .catch((error) => {res.sendStatus(500);
      console.log(error);
      //console.log(req.body)
    });
  });


  router.put('/cooler', rejectUnauthenticated, (req, res) => {
    console.log('this is the req.body', req.body);
    
      pool.query(`UPDATE "build"
      SET "cooler_id" = $1
      WHERE "build"."id" = $2;`,[req.body.component_id, req.body.build_id])
      // pool.query(queryText, queryInput)
      .then(() => res.sendStatus(201))
      .catch((error) => {res.sendStatus(500);
        console.log(error);
        //console.log(req.body)
      });
    });


    router.put('/mobo', rejectUnauthenticated, (req, res) => {
      console.log('this is the req.body', req.body);
      
        pool.query(`UPDATE "build"
        SET "mobo_id" = $1
        WHERE "build"."id" = $2;`,[req.body.component_id, req.body.build_id])
        // pool.query(queryText, queryInput)
        .then(() => res.sendStatus(201))
        .catch((error) => {res.sendStatus(500);
          console.log(error);
          //console.log(req.body)
        });
      });


      router.put('/case', rejectUnauthenticated, (req, res) => {
        console.log('this is the req.body', req.body);
        
          pool.query(`UPDATE "build"
          SET "case_id" = $1
          WHERE "build"."id" = $2;`,[req.body.component_id, req.body.build_id])
          // pool.query(queryText, queryInput)
          .then(() => res.sendStatus(201))
          .catch((error) => {res.sendStatus(500);
            console.log(error);
            //console.log(req.body)
          });
        });


        router.put('/gpu', rejectUnauthenticated, (req, res) => {
          console.log('this is the req.body', req.body);
          
            pool.query(`UPDATE "build"
            SET "gpu_id" = $1
            WHERE "build"."id" = $2;`,[req.body.component_id, req.body.build_id])
            // pool.query(queryText, queryInput)
            .then(() => res.sendStatus(201))
            .catch((error) => {res.sendStatus(500);
              console.log(error);
              //console.log(req.body)
            });
          });


          router.put('/storage', rejectUnauthenticated, (req, res) => {
            console.log('this is the req.body', req.body);
            
              pool.query(`UPDATE "build"
              SET "storage_id" = $1
              WHERE "build"."id" = $2;`,[req.body.component_id, req.body.build_id])
              // pool.query(queryText, queryInput)
              .then(() => res.sendStatus(201))
              .catch((error) => {res.sendStatus(500);
                console.log(error);
                //console.log(req.body)
              });
            });


            router.put('/memory', rejectUnauthenticated, (req, res) => {
              console.log('this is the req.body', req.body);
              
                pool.query(`UPDATE "build"
                SET "memory_id" = $1
                WHERE "build"."id" = $2;`,[req.body.component_id, req.body.build_id])
                // pool.query(queryText, queryInput)
                .then(() => res.sendStatus(201))
                .catch((error) => {res.sendStatus(500);
                  console.log(error);
                  //console.log(req.body)
                });
              });


              router.put('/psu', rejectUnauthenticated, (req, res) => {
                console.log('this is the req.body', req.body);
                
                  pool.query(`UPDATE "build"
                  SET "psu_id" = $1
                  WHERE "build"."id" = $2;`,[req.body.component_id, req.body.build_id])
                  // pool.query(queryText, queryInput)
                  .then(() => res.sendStatus(201))
                  .catch((error) => {res.sendStatus(500);
                    console.log(error);
                    //console.log(req.body)
                  });
                });

module.exports = router;