import dotenv from 'dotenv';
dotenv.config()

const keys =  {
    mongoURI: process.env.DB_CONNECTION,
    secretOrKey: process.env.SECRET
  };
export default keys;