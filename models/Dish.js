import mongoose from 'mongoose'

const Schema = mongoose.Schema

let DishSchema = new Schema({
    chef: { type: [String] },
    dish_name: { type: String },
    img_link: { type: String },
    description: { type: String },
    ingredients: {type: Array},
    recipe: {type: [String]}
  });
  
  export default mongoose.model("dishes", DishSchema);