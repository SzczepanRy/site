import { useState } from 'react'
import data from "./data"
import Header from './elements/Header'
import Tile from './elements/template'
import "./styles/app.scss"
import api from './api'
import { useLocation } from 'react-router-dom'
function App() {
  const location = useLocation()
  const AddToCart= async(i:number)=>{
    try{
      //e.preventDefault()
      console.log("clicked")
      const resopnce = await api.addToCart(i,location.state)
      console.log(resopnce)

    }catch{
      console.error("bad call to add item")
    }
  }



  let tiles = data.map((data:any,i:number)=>{
    return(
      <Tile onClick={AddToCart(data.key)} key={i} data={data}/>
    )
  })
  return (
    <div className="App">
      <Header/>
      <div  className="tiles">
        {tiles}
      </div>
      
    </div>
  )
}

export default App
