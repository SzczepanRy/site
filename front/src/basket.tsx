import React from "react";
import api from "./api";
import { useLocation } from 'react-router-dom'
import Tile from "./elements/template";
import data from "./data";
import "./styles/basket.scss"


const Basket = ()=>{
    const location = useLocation()
    const [cart,setCart]:any = React.useState([])

    React.useEffect(()=>{
    
        const call = async()=>{
            try{
                //console.log(location.state)
                let data = await api.getBasket(location.state)
               // console.log(Object.values(data))
                setCart(Object.values(data))
            }catch{
                console.error("could not get basket")
            }
        }
        call()
    },[])
    //let mycart = console.log(JSON.parse(JSON.stringify(cart)))
   let my_cart = Object.values(cart)

    //setCart(mycart)
    let endCart:Array<string> = [];
    
    cart.map((e:string)=>{
        if(!endCart.includes(e)){
            endCart.push(e)
        }
    })
    let end_data:any = []

    data.map((tile:any)=>{
        
        endCart.map((el:any,i:number)=>{
            console.log(el.id)
            if(`${tile.key}`===el.id){  
                
                end_data.push(<Tile num={el.num} key={i} data={tile}/>)
                
            }

        })        
    })

    const basket_tiles = end_data.map((tile:any)=>{
        return(tile)
    })

    return(
        <>
            <div className="basket">
                {basket_tiles}
            </div>
            
        </>
    )

}
export default Basket