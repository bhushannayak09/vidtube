import { db_name } from "../constants.js";
import mongoose from "mongoose";

const con_db = async ()=>
{
    try {
      const connInst = await mongoose.connect(`${process.env.mdb_uri}/${db_name}`)
      console.log(`\n Mongodb connected ${connInst.connection.host}`)
        
    } catch (error) {
        console.log("mdb conn err", error)
        process.exit(1)
    }
}

export default con_db;
