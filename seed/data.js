import db from '../db/connection.js'
import Dish from '../models/Dish.js'
import Character from '../models/Character.js'
import dishes from './dishes2.json' assert {type:'json'}
import characters from './characters.json' assert {type:"json"}
import chalk from 'chalk'

//asynch/away is the new way of consuming promises rather than.then

const insertData = async ()=> {
    
    //reset database
    await db.dropDatabase()

    //Insert Data
    await Character.create(characters)
    await Dish.create(dishes)

    console.log(chalk.magenta('Characters and Dishes are created!'))

    //Close DB Connection
    await db.close();
}
insertData()