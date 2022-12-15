import React from "react";
import "../styles/tile.scss"

const Tile = (props:any)=>{
    return(
        <div className="Tile">
            <h2>{props.data.title}</h2>
            <div className="Tile_inner">
                
                <img src={props.data.img} alt="badpath"/>
                <p>{props.data.description}</p>
            </div>
    
        </div>
    )
}
export default Tile