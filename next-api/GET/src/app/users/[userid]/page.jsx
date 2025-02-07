import React from 'react'

const getUser = async (id) => {
    const req = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await req.json();
    return data.result;
}



const UserIdPage = async ({ params }) => {
    const user = await getUser(params.userid)
    return (
        <div>
            <h1>welcome to user details page</h1>
            <h1>ID : {user.id}</h1>
            <h1>Name : {user.name}</h1>
            <h1>age : {user.age}</h1>
            <h1>mail : {user.email}</h1>
        </div>
    )
}

export default UserIdPage
