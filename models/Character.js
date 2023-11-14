import mongoose from 'mongoose'

const Schema = mongoose.Schema

let CharacterSchema = new Schema({
    name: { type: String },
    age: { type: String },
    Gender: { type: String },
    Cuisine_Style: { type: String },
    Affiliation: { type: String },
    Food_Forte: { type: String },
    Elite_10_Member: { type: Boolean },
    Generation: { type: String },
    School: { type: String },
    image_Link: { type: String }
  });

export default mongoose.model("characters", CharacterSchema);