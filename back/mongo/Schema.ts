import mongoose ,{Schema} from "mongoose"

interface User{
    login:string;
    password:string;
    data:Array<Obj>;
};
interface Obj{
    id:string;
    num:string;
}



const UserSchema = new Schema<User>({
    login:{
        type:String
    },
    password:{
        type:String
    },
    data:[
        
        {
            id:{ type:String},
            num:{ type:String}
        }
        
    ]

    
})
const myUser = mongoose.model<User>("User",UserSchema);

export{myUser as default,User}