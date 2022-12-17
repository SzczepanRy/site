import React from "react";
import '../styles/header.scss'
import api from "../api"
import { useLocation, useNavigate } from "react-router-dom";
const Header = () =>{
    let navigate = useNavigate()
    let location = useLocation()
    let user = location.state
    const getBasket = ()=>{
        //async
        // await api.getBasket()
        navigate("/basket",{state:user})
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