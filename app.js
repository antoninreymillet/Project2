require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
server.listen(4000);
const ent = require("ent");
const router = express.Router();
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

mongoose
  .connect("mongodb://localhost/ForumDiogene", {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use("/resources", express.static("resources"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  session({
    secret: "basic-auth-secret",
    cookie: {
      maxAge: 60000
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60
    })
  })
);

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

//chargement page principale tchat Socket.io
app.get("/winTchat", function(req, res) {
  res.sendFile(
    "C:/Users/anton/Desktop/copie travail/Project2/Diogene/views/winTchat.html"
  );
});

//création pseudo et stockage
io.sockets.on("connection", function(socket, pseudo) {
  socket.on("nouveau_client", function(pseudo) {
    pseudo = ent.encode(pseudo);
    socket.pseudo = pseudo;
    socket.broadcast.emit("nouveau_client", pseudo);
  });

  // recuperation pseudo et transfert aux autres utilisateurs
  socket.on("message", function(message) {
    message = ent.encode(message);
    socket.broadcast.emit("message", {
      pseudo: socket.pseudo,
      message: message
    });
    console.log("hello", message);
  });
});

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

const auth = require("./routes/auth");
app.use("/", auth);

const index = require("./routes/index");
app.use("/", index);

const infoProfile = require("./routes/InfoProfil");
app.use("/", infoProfile);

const createProfile = require("./routes/createProfile");
app.use("/", createProfile);

const tchat = require("./routes/tchat");
app.use("/", tchat);

const winTchat = require("./routes/winTchat");
app.use("/", winTchat);

const researchResults = require("./routes/researchResults");
app.use("/", researchResults);

const forumList = require("./routes/forumList");
app.use("/", forumList);

const forumTech = require("./routes/forumTech");
app.use("/", forumTech);

const forumMANGA = require("./routes/forumMANGA");
app.use("/", forumMANGA);

const forumGEEK = require("./routes/forumGEEK");
app.use("/", forumGEEK);

const threads = require("./routes/threads");
app.use("/thread", threads);

const createThreads = require("./routes/createThreads");
app.use("/", createThreads);

const editThreads = require("./routes/editThreads");
app.use("/", editThreads);

module.exports = server;
module.exports = router;
module.exports = app;

server.listen = 3000;
