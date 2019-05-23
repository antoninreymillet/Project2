const mongoose = require('mongoose');
const Thread = require('../models/threads');

const dbName = 'ForumDiogene';
mongoose.connect(`mongodb://localhost/${dbName}`);

const threads = [
    {
        type:"MANGA",
        pseudo: "Pika404",
        threadsName: "Batterie pour pika en manque de jus.",
        topic: "Pikachu ne produisant plus d'éclair cherche batterie 60V"
    },
    {
        type:"GEEK",
        pseudo: "SMB81",
        threadsName: "Appréciation pour vente de poil de moustache",
        topic: "A quel prix pourrais-je vendre des poils de moustache ayant appartenu à une icone du jeu video des années 80 ?",
    },
    {
        type:"TECH",
        pseudo: "SkynetT800",
        threadsName: "Cherche pièce de rechange pour Terminator",
        topic: "Bonjour suite à un projet de domination mondiale avec ma startUp Skynet je cherche une vis pour bras mécanique EF45VB56"
    },
]

Thread.create(threads, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${threads.length} threads`)
    mongoose.connection.close();
});