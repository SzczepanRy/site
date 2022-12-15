import mongoose ,{Schema} from "mongoose"

interface User{
    login:string;
    password:string;
    data:Items[];
};
interface Items{
    i:String;
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
            i:{
                type:String
            }
        }
    ]

    
})
const myUser = mongoose.model<User>("User",UserSchema);

export{myUser as default,User}