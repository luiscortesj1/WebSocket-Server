const express = require("express");
const cors = require("cors");
const { socketController } = require("../sockets/controller");


class Server {
  //class
  constructor() {
    //propiedad
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app); // server de socket
    this.io = require("socket.io")(this.server); // informacion de los socket conectados

    /* //Ruta Auth
      
        */
    this.paths = {};

    //Middlewares
    this.middlewares();

    //routes
    this.routes();

    // configuracion sockets
    this.sockets();
  }

  //Methods

  middlewares() {
    //CORS (middlewares)
    this.app.use(cors());

    //Directorio public
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.auth, require("../routes/authRoutes"));
  }

  sockets() {
    this.io.on("connection", socketController);
  }

  listen() {
    this.server.listen(this.port, () => {
      // server por app
      console.log("listening on port " + this.port);
    });
  }
}

module.exports = Server;
