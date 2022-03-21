import { useState } from "react"
import './PostContacts.css'
import GetContact from "../GetContacts"
import Spinner from "../../spiner"

export default function PostContact({url}){
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [phone,setPhone] = useState('')
    const [loading, setLoading] = useState(false)
    
    const handleSubmit= (e) =>{ 
        e.preventDefault()
        setLoading(true)
        fetch(url,{
          method: "POST",
          body:JSON.stringify({
                nombre:name,
                apellido:lastName,
                telefono:phone
              })
            }).then(res => res.json())
            .then(data=>{
              console.log(data)
              setName('')
              setLastName('')
              setPhone('')
              setLoading(false)

            })
            .catch(err => <h1>{err} </h1>)
          }
          return <>
          <div>
            <form onSubmit={handleSubmit}>
                <h1>New Contact</h1>
                <input type="text" value={name} placeholder="Nombre" onChange={(e)=> setName(e.target.value)} required />
                <input type="text" value={lastName} placeholder="Apellido" onChange={(e)=> setLastName(e.target.value)} required />
                <input type="text" value={phone} placeholder="Telefono" onChange={(e)=> setPhone(e.target.value)} required />
                {!loading ? <button type='submit'>Enviar</button> :<button type='submit'>Enviando</button>}
            </form>
            {!loading ? <GetContact url={url}/>: <Spinner/>}
          </div>
          </>
          
              
}