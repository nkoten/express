
import express from "express";
import { accessHome, listFiles, accessFile } from '../controllers/home.js';

const 
  router = express.Router()
;

router.get( "/", accessHome );

router.get( "/files", listFiles );

router.get( '/file/:fileId', accessFile );

export default router;
