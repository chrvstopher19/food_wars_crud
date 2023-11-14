import { Router } from "express";

import * as controllers from '../controllers/dishes.js'; // import { getCharacter, getCharacters } from "../controllers/characters";

const router = Router();

// Define my routes
router.get ('/', controllers.getDishes)
router.get('/:id', controllers.getDish)
router.post('/', controllers.createDish)
router.put('/:id', controllers.updateDish)
router.delete('/:id', controllers.deleteDish)

export default router