import React from 'react'
import { useParams } from 'react-router-dom'

export default function Todoitem() {

    const {id} =useParams()
   

  return (
    <div>
    <h2>Todo Details</h2>
    <h3>{id}</h3>
     
    </div>
  )
}
