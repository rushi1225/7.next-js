"use client"
import React, { useState } from 'react'


const AddNewUserPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")

    const addUser = async () => {
        console.log(name, email, age)
        const response = await fetch("http://localhost:3000/api/users", {
            method: "Post",
            body: JSON.stringify({ name, email, age })
        });

        response = await response.json();
        if (response.success) {
            alert("New user Added")
        } else {
            alert("Something wrong")
        }
        console.log(response)
    }









    return (
        <div>
            <h1 className='text-center '>Add New User</h1>

            <div className='text-center mt-5'>
                <input type="text" placeholder='enter name' value={name} onChange={(event) => setName(event.target.value)} className='border-2 p-2 m-2' />
                <input type="text" placeholder='enter email' value={email} onChange={(event) => setEmail(event.target.value)} className='border-2 p-2 m-2' />
                <input type="text" placeholder='enter age' value={age} onChange={(event) => setAge(event.target.value)} className='border-2 p-2 m-2' />
                <button onClick={addUser}>Add User</button>
            </div>
        </div>
    )
}

export default AddNewUserPage
