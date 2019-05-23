const express = require('express');
const router  = express.Router();
const Thread = require('../models/threads')
const term = [];

/* GET research results page */
router.get('/researchResults', (req, res, next) => {
  Thread.find({
$text: { $search: term },
  })
    .then((products) => {
res.render('researchResults', products)
    })
    .catch((error) => {
      console.error(error);
    })
});

module.exports = router;