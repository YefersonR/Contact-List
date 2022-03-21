import { useState,useEffect } from "react"
import './GetContacts.css'

export default function GetContact({url}){

    const [contact, setContact]=useState([])
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setContact(data)
        }).catch(err=> <h1>{err}</h1>)
    },[])
    return <>
        <table>
      <thead>
      <tr className="head">
        <th>Name</th>
        <th>Last Name</th>
        <th>Telephone</th>
      </tr>
      </thead>
      <tbody>
      {
        contact.map(({nombre,apellido,telefono}) =>(
            <tr key={`${nombre}${apellido}-${telefono}`}>
              <td className="first">{nombre}</td>
              <td>{apellido}</td>
              <td className="last">{telefono}</td>
            </tr>
        ))

      }
      </tbody>

    </table>
    </>    
}
