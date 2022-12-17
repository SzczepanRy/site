import { useState } from 'react'
import data from "./data"
import Header from './elements/Header'
import Tile from './elements/template'
import "./styles/app.scss"
import api from './api'

function App() {




  let tiles = data.map((data:any,i:number)=>{
    return(
      <Tile type="button" key={i} data={data}/>
    )
  })
  return (
    <div className="App">
      <Header />
      <div  className="tiles">
        {tiles}
      </div>
      
    </div>
  )
}

export default App
