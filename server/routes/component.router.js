const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//GET route for logged-in USER builds

router.get('/:component', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', rejectUnauthenticated, req.user);
    pool.query(`SELECT*FROM "components" WHERE components.type = $1 ORDER BY id;`, [req.params.component])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for builds:', error);
            res.sendStatus(500);
        });
    
    });

    module.exports = router;