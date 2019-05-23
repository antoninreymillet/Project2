const express = require('express');
const router  = express.Router();
const Profile = require ('../models/Profile');

/* GET createProfile page */
router.get('/createProfile', (req, res, next) => {
  res.render('createProfile');
});

router.post('/createProfile', (req, res, next) => {
  const { Nom, Prenom, Age, Entreprise, Email, Adresse, DomaineCollections,
    TailleCollection, PagesSociales, Commentaires, Pseudo, MotDePasse, Signature } = req.body;
  const newProfile = new Profile ({ Nom, Prenom, Age, Entreprise, Email, Adresse, DomaineCollections,
    TailleCollection, PagesSociales, Commentaires, Pseudo, MotDePasse, Signature });
  newProfile.save()
  .then((prof) => {
  res.redirect('/InfoProfil/'+prof._id)
  })
  .catch((error) => {
  console.log(error);
  })
  });

module.exports = router;