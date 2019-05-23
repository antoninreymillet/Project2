const express = require('express');
const router  = express.Router();

/* GET tchat page */
router.get('/winTchat', (req, res, next) => {
  res.render('winTchat');
});

module.exports= router;
