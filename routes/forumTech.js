const express = require('express');
const router  = express.Router();
const Thread = require('../models/threads');


/* GET TECH forum List */
router.get('/forumTech', (req, res, next) => {
  Thread.find({type: "TECH"})
  .then(AllTechType => {
    console.log("All tech type")
    console.log(AllTechType)
  res.render('forumTech', {AllTechType});
  })
  .catch(error => {
    console.log('Error while getting the threads from the DB:', error);
  })
});

module.exports = router;