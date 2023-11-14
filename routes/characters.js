import { Router } from "express";

import * as controllers from '../controllers/characters.js'; // import { getCharacter, getCharacters } from "../controllers/characters";

const router = Router();

// Define my routes
router.get ('/', controllers.getCharacters)
router.get ('/name/:name', controllers.getCharacterbyName)
router.get('/:id', controllers.getCharacter)
router.post('/', controllers.createCharacter)
router.put('/:id', controllers.updateCharacter)
router.delete('/:id', controllers.deleteCharacter)

export default router