const express = require('express');
const router  = express.Router();
const Thread = require('../models/threads');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
  if (req.query.search) {
    const regex = new RegExp(escapeRegex(req.query.search), 'gi');
    Thread.find({ "threadsName": regex }, function(err, foundthread) {
        if(err) {
            console.log(err);
        } else {
           res.render("researchResults", { threadsName: foundthread });
        }
    });
 }
});

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;
