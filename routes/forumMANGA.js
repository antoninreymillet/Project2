const express = require('express');
const router  = express.Router();
const Thread = require('../models/threads');


/* GET MANGA forum List */
router.get('/forumMANGA', (req, res, next) => {
  Thread.find({type: "MANGA"})
  .then(AllMangaType => {
    console.log(AllMangaType)
    res.render('forumMANGA', {AllMangaType})
  })
  .catch(error => {
    console.log('Error while getting the threads from the DB:', error);
  })
});

module.exports = router;