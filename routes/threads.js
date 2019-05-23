const express = require('express');
const router = express.Router();
const Thread = require('../models/threads');

/* Get and Render a topic */
router.get('/:id', (req, res, next) => {
  console.log(req.params)
  Thread.findById(req.params.id)
    .then(thread => {
      res.render('threads', {
        thread
      });
    })
    .catch(error => {
      console.log(`Error while getting the threads from the DB:`, error);
    })
});

module.exports = router;