const express = require('express');
const router  = express.Router();
const Thread = require('../models/threads');

/* GET GEEK forum List */
router.get('/forumGEEK', (req, res, next) => {
  Thread.find({type: "GEEK"})
  .then(AllGeekType => {
    console.log(AllGeekType)
    res.render('forumGEEK', {AllGeekType});
  })
  .catch(error => {
    console.log('Error while getting the threads from the DB:', error);
  })
});

module.exports = router;