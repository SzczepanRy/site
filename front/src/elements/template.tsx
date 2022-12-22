import React from "react";
import "../styles/tile.scss"
import api from "../api";
import { useLocation ,useNavigate} from 'react-router-dom'
const Tile = (props:any)=>{
    const location = useLocation()
    let navigate = useNavigate()
    const addToMyCart= async(i:number)=>{
        try{
          //e.preventDefault()
          const resopnce = await api.addToCart(i,location.state)
          console.log(resopnce)
    
        }catch{
          console.error("bad call to add item")
        }
    }
    const back = ()=>{
        navigate("/main")
    }
    console.log(props)
    return(
        
        <div onClick={()=>{addToMyCart(props.data.key)}} className="Tile">
            <h2>{props.data.title}</h2>
            <div className="Tile_inner">
                
                <img src={props.data.img} alt="badpath"/>
                <p>{props.data.description}</p>
                <p>{props.num} selected</p>
            </div>
    
        </div>
        
        
    )
}
export default Tile