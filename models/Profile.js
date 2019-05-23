const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  Nom: String,
  Prenom: String,
  Age: Number,
  Entreprise: String,
  Email:String,
  Adresse: String,
  DomaineCollections: String,
  TailleCollection: Number,
  PagesSociales: String,
  Commentaires: String,
  Pseudo: String,
  MotDePasse: String,
  Signature: String,
}, {
  timestamps: true
});

const Profile = mongoose.model("Profiles", profileSchema);

module.exports = Profile;