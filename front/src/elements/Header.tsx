import React from "react";
import '../styles/header.scss'
import api from "../api"
import { useNavigate } from "react-router-dom";
const Header = () =>{
    let navigate = useNavigate()
    const getBasket = ()=>{
        //async
        // await api.getBasket()
        navigate("/basket",{replace:true})
    }

    return(
        <div className="header">
            <div className="elements">
                
                <div onClick={()=>{getBasket()}} className="kosz"> kosz</div> 
            </div>
        </div>
    )
}
export default Header