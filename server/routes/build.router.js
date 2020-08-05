const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('req.user:', rejectUnauthenticated, req.user);
    pool.query('SELECT * FROM "build" WHERE "user_id" = $1;', [req.user.id])
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

module.exports = router;