const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');



//GET route to populate new build page with default images

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.user);
    pool.query(`SELECT "id", "type", "name" , "image" , "details"
    FROM "components" WHERE id <9`)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for components:', error);
            res.sendStatus(500);
        });
});


module.exports = router;