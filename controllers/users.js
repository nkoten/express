
// ==-== controllers/users.js
import db from '../db/users.json' with { type: "json" };

export const getUsers = ( req, res ) => {
  if( !db ) {
    console.log( '!db.users' );
  } else {
    res.json( db );
  }
};
