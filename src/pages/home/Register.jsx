import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginParol, setloginParol] = useState("")

    const handleRegister = async (e) => {
        alert('Royxatdan otildi')
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        }
        catch (e) {
            console.log(e.message)
        }
    }


    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, loginEmail, loginParol)
            .then((userCredential) => {
                const user = userCredential.user
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid
                console.log(uid)
            } else {

            }

        })
    }, [])


    return (
        <div className='flex flex-col justify-center items-center'>
            <form action="" onSubmit={handleRegister}>
                <input type="email" onChange={e => setEmail(e.target.value)} className='rounded border-2 border-black py-1 px-3' placeholder='email' />
                <input type="password" onChange={e => setPassword(e.target.value)} className='rounded border-2 border-black py-1 px-3' placeholder='password' />
                <button className='bg-sky-600 text-white py-1 px-3 rounded'>Register</button>
            </form>
            <form action="" onChange={handleLogin}>
                <input type="email" onChange={e => setLoginEmail(e.target.value)} className='rounded border-2 border-black py-1 px-3' placeholder='email' />
                <input type="password" onChange={e => setloginParol(e.target.value)} className='rounded border-2 border-black py-1 px-3' placeholder='password' />
                <button className='bg-sky-600 text-white py-1 px-3 rounded'>Login</button>

            </form>
        </div>
    )
}

export default Register