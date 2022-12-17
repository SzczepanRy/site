import mongoose ,{Schema} from "mongoose"

interface User{
    login:string;
    password:string;
    data:Array<string>;
};



const UserSchema = new Schema<User>({
    login:{
        type:String
    },
    password:{
        type:String
    },
    data:[
        
        {
            type:String
        }
        
    ]

    
})
const myUser = mongoose.model<User>("User",UserSchema);

export{myUser as default,User}