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
           
            return false
        }
    }
    async checkUser(Login:string,Password:string){
        try{
           
            const data =  await this.client.post("/checkUser",{
                login:Login,
                password:Password
            })
            return data
        }catch{
           
            return false
        }
    }
    async addToCart(i:number,login:string){
        try{
            const responce = await this.client.post("/addToCart",{i, login})
            return responce
        }catch{
            return false
        }
    }
    async getBasket(login:string){
        try{
            
            const elements = await this.client.post("/getBasket",{login})
            let cart_arr = JSON.parse(JSON.stringify(elements)).data
            console.log(cart_arr)
            return cart_arr
        }catch{
            console.error("bad api call for get basket")
        }
    }

}
export default new Api()