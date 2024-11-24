
import dotenv from "dotenv"
import {app} from "./app.js"
import con_db from "./db/index.js"

dotenv.config({path:"./.env"})


const PORT = process.env.PORT || 3000

con_db().then(
    ()=>{ app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)}) })
.catch((err)=>{console.log("mdb conn err",err)})
