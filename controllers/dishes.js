import Dish from '../models/Dish.js'

export const getDishes = async (req,res)=>{
    try {
        const dishes= await Dish.find()
        res.json(dishes)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
}

export const getDish = async (req,res) =>{
    try {
        const { id } = req.params
        const dish = await Dish.findById(id)
        if (dish){
            return res.json(dish)
        }
        res.status(404).json ({message: "Dish not found"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
}

export const createDish = async(req,res)=>{
    const dish = new Dish(req.body)
    await dish.save()
    res.status(201).json(dish);
}

export const updateDish = async (req,res) => {
    const { id }= req.params
    const dish = await Dish.findByIdAndUpdate(id , req.body);
    res.status(201).json(dish);
}

export const deleteDish = async(req,res) => {
    const { id }= req.params
    const deleted=await Dish.findByIdAndDelete(id)

    if (deleted){
        return res.status(200).send('Dish Deleted')
    } throw new error ('Dish not found')
}