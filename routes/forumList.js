const express = require('express');
const router  = express.Router();

/* GET forum List */
router.get('/forumList', (req, res, next) => {
  res.render('forumList');
});

module.exports = router;