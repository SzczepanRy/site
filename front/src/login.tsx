import React from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import "./styles/login.scss"

const Login = ()=>{
    let navigate =useNavigate()
    const login:any = React.useRef("")
    const password:any = React.useRef("")

    const addUser =async(e:any)=>{
        try{
            e.preventDefault()
            const Login = login.current.value
            const Password = login.current.value
            const responce = await api.addUser(Login,Password)
            if(responce){
                navigate('/main',{state:Login})
            }
        }catch{
            console.log("bad api addUser call")
        }
        

       
    }
    return(
        <div className="main">
            <form onSubmit={addUser}>
                <input ref={login} placeholder="login"></input>
                <input ref={password} placeholder="password"></input>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Login