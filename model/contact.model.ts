
import {Schema,model,models} from "mongoose"
const contactSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        lowerCase:true
    },
    lastName:{
        type:String,
        required:true,
        lowerCase:true
    },
    email:{
        type:String,
        required:true,     
    },
    mobile:{
        type:String,
        required:true,     
    },
    serviceName:{
        type:String,
        required:true,  
        enum:["branding","web","uiux","app"] 
      
    },
    message:{
        type:String,
        required:true,     
    },

})

const ContactModel = models.CONTACT || model("CONTACT",contactSchema)

export default ContactModel