import React,{useState} from 'react'
import LogIn from './Login'
import Ingresar from './Ingresar'

const FormMio = () => {
    const [user, setUser] = useState({
        name: "",
        email:"",
        password:""
    })
    const [componente, setComponente] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.name.length>1 && user.password.length>1){
            setComponente("login")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" onChange={(e)=> setUser({...user, name: e.target.value})} />
            <label>Email</label>
            <input type="email" onChange={(e)=> setUser({...user, email: e.target.value})} />
            <label>Password</label>
            <input type="password" onChange={(e)=> setUser({...user, password: e.target.value})} />
            <button>Submit</button>
            {componente === "login" ? <Ingresar user={user}/> : null}
        </form>
    </div>
  )
}

export default FormMio