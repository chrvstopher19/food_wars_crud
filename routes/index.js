//Destructing so you pull only the router functionalitty out of express
import { Router } from "express";
import dishesRoutes from './dishes.js'
import charactersRoutes from './characters.js'

//Call the router
const router = Router();


router.get ('/', (req,res)=> res.send('this is the api root'))

router.use("/dishes", dishesRoutes);
router.use("/characters", charactersRoutes);


export default router