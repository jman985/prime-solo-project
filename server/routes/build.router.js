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
    build.id AS build_id,
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
    build.id AS build_id,
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
    build.id AS build_id,
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
    build.id AS build_id,
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
    build.id AS build_id,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.details AS details
    FROM "build"
    JOIN "components" ON "gpu_id" = "components"."id" WHERE user_id = $1 AND build.id = $2
    UNION
    SELECT
    build.name AS build_name,
    build.id AS build_id,
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
    build.id AS build_id,
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
    build.id AS build_id,
    components.id AS id,
    components.type AS type,
    components.name AS name,
    components.image AS image,
    components.details AS details
    FROM "build"
    JOIN "components" ON "psu_id" = "components"."id" WHERE user_id = $1 AND build.id = $2 ORDER BY type;`, [req.user.id, req.params.id])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for components:', error);
            res.sendStatus(500);
        });
});


router.put('/cpu/:componentId', rejectUnauthenticated, (req, res) => {
  console.log('this is the req.body', req.body);
  
  //put component id and req.params in call
    pool.query(`UPDATE "build"
    SET "cpu_id" = $1
    WHERE "build"."id" = $2;`,[req.params.componentId, req.body.build_id])
    // pool.query(queryText, queryInput)
    .then(() => res.sendStatus(201))
    .catch((error) => {res.sendStatus(500);
      console.log(error);
      //console.log(req.body)
    });
  });


  router.put('/cooler/:componentId', rejectUnauthenticated, (req, res) => {
    console.log('this is the req.body', req.body);
    
      pool.query(`UPDATE "build"
      SET "cooler_id" = $1
      WHERE "build"."id" = $2;`,[req.params.componentId, req.body.build_id])
      // pool.query(queryText, queryInput)
      .then(() => res.sendStatus(201))
      .catch((error) => {res.sendStatus(500);
        console.log(error);
        //console.log(req.body)
      });
    });


    router.put('/mobo/:componentId', rejectUnauthenticated, (req, res) => {
      console.log('this is the req.body', req.body);
      
        pool.query(`UPDATE "build"
        SET "mobo_id" = $1
        WHERE "build"."id" = $2;`,[req.params.componentId, req.body.build_id])
        // pool.query(queryText, queryInput)
        .then(() => res.sendStatus(201))
        .catch((error) => {res.sendStatus(500);
          console.log(error);
          //console.log(req.body)
        });
      });


      router.put('/case/:componentId', rejectUnauthenticated, (req, res) => {
        console.log('this is the req.body', req.body);
        
          pool.query(`UPDATE "build"
          SET "case_id" = $1
          WHERE "build"."id" = $2;`,[req.params.componentId, req.body.build_id])
          // pool.query(queryText, queryInput)
          .then(() => res.sendStatus(201))
          .catch((error) => {res.sendStatus(500);
            console.log(error);
            //console.log(req.body)
          });
        });


        router.put('/gpu/:componentId', rejectUnauthenticated, (req, res) => {
          console.log('this is the req.body', req.body);
          
            pool.query(`UPDATE "build"
            SET "gpu_id" = $1
            WHERE "build"."id" = $2;`,[req.params.componentId, req.body.build_id])
            // pool.query(queryText, queryInput)
            .then(() => res.sendStatus(201))
            .catch((error) => {res.sendStatus(500);
              console.log(error);
              //console.log(req.body)
            });
          });


          router.put('/storage/:componentId', rejectUnauthenticated, (req, res) => {
            console.log('this is the req.body', req.body);
            
              pool.query(`UPDATE "build"
              SET "storage_id" = $1
              WHERE "build"."id" = $2;`,[req.params.componentId, req.body.build_id])
              // pool.query(queryText, queryInput)
              .then(() => res.sendStatus(201))
              .catch((error) => {res.sendStatus(500);
                console.log(error);
                //console.log(req.body)
              });
            });


            router.put('/memory/:componentId', rejectUnauthenticated, (req, res) => {
              console.log('this is the req.body', req.body);
              
                pool.query(`UPDATE "build"
                SET "memory_id" = $1
                WHERE "build"."id" = $2;`,[req.params.componentId, req.body.build_id])
                // pool.query(queryText, queryInput)
                .then(() => res.sendStatus(201))
                .catch((error) => {res.sendStatus(500);
                  console.log(error);
                  //console.log(req.body)
                });
              });


              router.put('/psu/:componentId', rejectUnauthenticated, (req, res) => {
                console.log('this is the req.body', req.body);
                
                  pool.query(`UPDATE "build"
                  SET "psu_id" = $1
                  WHERE "build"."id" = $2;`,[req.params.componentId, req.body.build_id])
                  // pool.query(queryText, queryInput)
                  .then(() => res.sendStatus(201))
                  .catch((error) => {res.sendStatus(500);
                    console.log(error);
                    //console.log(req.body)
                  });
                });

                router.put('/name/:buildId', rejectUnauthenticated, (req, res) => {
                  console.log('this is the req.body', req.body);
                    pool.query(`UPDATE "build"
                    SET "name" = $1
                    WHERE "build"."id" = $2`,[req.body.name, req.params.buildId])
                    // pool.query(queryText, queryInput)
                    .then(() => res.sendStatus(201))
                    .catch((error) => {res.sendStatus(500);
                      console.log(error);
                      //console.log(req.body)
                    });
                  });


module.exports = router;