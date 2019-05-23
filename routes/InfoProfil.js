const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');


/* GET for profile */
router.get('/InfoProfil', (req, res, next) => {
  res.render('Please')
})

router.get('/InfoProfil/:id', (req, res, next) => {
  Profile.findById(req.params.id)
    .then(AllProfileInfo => {
      console.log(AllProfileInfo)
      res.render('InfoProfil', {
        AllProfileInfo
      })
    })
    .catch(error => {
      console.log('Error while getting the profile Info:', error);
    })
});

module.exports = router;