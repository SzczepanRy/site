import axios,{AxiosInstance} from "axios"
const ser_url = "http://localhost:4000"
class Api{

    client:AxiosInstance
    
    constructor(){
        this.client = axios.create({
            baseURL:ser_url,
            withCredentials:true,
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
    // async getBasket(){
    //     try{
    //         const {data} = await this.client.get("/basket")
    //         return data
    //     }catch{
    //         return"bad basket req"
    //     }
    // }
    async addUser(Login:string,Password:string){
        try{
           
            const {data} =  await this.client.post("/addUser",{
                login:Login,
                password:Password
            })
            return data
        }catch{
            console.log("bad add user ")
            return false
        }
    }
    async addToCart(i:number,login:string){
        try{
            console.log("api")
            const responce = await this.client.post("/addToCart",{i, login})
            console.log(responce)
            return responce
        }catch{
            return false
        }
    }

}
export default new Api()