
import express from "express";
import home from "./routes/home.js";

const server = express();
const routes = {
  home,
};

const app = {
  port: process.env.PORT || 8080,
  db: {
    data: [
      "1", "2", "3",
    ],
  },
};

express.M = ( req, res, next ) => {
  console.log( "m: oi" );
  next();
}

server.use( express.json() );
server.use( express.M );
server.use( "/home", routes.home );


server.get( "/", ( req, res ) => {
  res.json({ "url": "/", "data": "dados", "dados": app.db.data });
} );

server.listen( app.port, _ => {
  console.log( `server: => http://127.0.0.1:${ app.port }` );
} );
