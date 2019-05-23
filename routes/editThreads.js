const express = require('express');
const router  = express.Router();
const Thread = require('../models/threads');

/* GET and POST for Editing New Threads */
router.get('/editThreads/:id', (req, res, next) => {
    console.log(req.params.id, "test")
    Thread.findById(req.params.id)
    .then((editthread) => {
        console.log("----editthread---------")
        console.log(editthread)
        res.render("editThreads", {thread: editthread});
    })
})

    router.post('/editThreads/:id', (req, res, next) => {
        const { type, pseudo, threadsName, topic } = req.body;
        Thread.updateOne({$set: {type, pseudo, threadsName, topic}})
        .then((thread) => {
        res.redirect('/forumList')
        })
    .catch((error) => {
        console.log(error);
    })
    });

module.exports = router;