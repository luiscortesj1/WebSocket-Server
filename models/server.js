const express = require("express");
const cors = require("cors");


class Server {
  //class
  constructor() {
    this.app = express(); //propiedad
    this.port = process.env.PORT;

    /* //Ruta Auth
      
        */
    this.paths = { };

    

    //Middlewares
    this.middlewares();

    //routes
    this.routes();
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
  listen() {
    this.app.listen(this.port, () => {
      console.log("listening on port " + this.port);
    });
  }
}

module.exports = Server;
