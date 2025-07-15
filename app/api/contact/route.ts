import mongoose from "mongoose"
const db = `${process.env.DB_URL}/${process.env.DB_NAME}`
mongoose.connect(db)

import { NextRequest, NextResponse as res} from "next/server"
import ContactModel from "../../../model/contact.model"


export const POST = async (req:NextRequest )=>{

    try{
        const body  = await req.json()
       
        const message = await ContactModel.create(body)
        

        return res.json(message)
    }
    catch(err)
    {
       console.error("API ERROR:", err); 
    }
    

}