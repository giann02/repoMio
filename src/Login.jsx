import React from 'react'

const LogIn = ({user}) => {
    return (
        <div>
            <h1>Ha sido registrado exitosamente!</h1>
            <h1>{user.nombre}</h1>
            <h2>{user.email}</h2>
            <h2>{user.password}</h2>
        </div>
    )     
}

export default LogIn      