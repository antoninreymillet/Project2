const express = require('express');
const router  = express.Router();

/* GET tchat page */
router.get('/users/tchat', (req, res, next) => {
  res.render('tchat');
});

module.exports = router;