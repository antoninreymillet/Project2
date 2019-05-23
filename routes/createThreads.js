const express = require('express');
const router  = express.Router();
const Thread = require('../models/threads');

/* GET and POST for Creating New Threads */
router.get('/createThreads', (req, res, next) => {
    res.render('createThreads')
});

router.post('/createThreads', (req, res, next) => {
const { type, pseudo, threadsName, topic } = req.body;
const newThread = new Thread ({ type, pseudo, threadsName, topic });
newThread.save()
.then((thread) => {
res.redirect('/forumList')
})
.catch((error) => {
console.log(error);
})
});

module.exports = router;