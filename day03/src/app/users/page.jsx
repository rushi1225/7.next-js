import React from 'react'

const userList = async () => {
    const req = await fetch("https://dummyjson.com/users")
    const res = await req.json();
    return res.users;

}


const UserPage = async () => {
    const users = await userList()

    return (

        <div>
            <h1 className='text-3xl text-center text-red-600'>Hello this is user page</h1>
            {
                users.map((item) => (
                    <h1>hello : {item.firstName}</h1>
                ))
            }
        </div>
    )
}

export default UserPage
