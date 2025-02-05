import React from 'react'
import getUsers from '../../../services/getUsers'

const UserPage = async () => {
    const userList =  getUsers()
    const users = await userList;

    return (

        <div>
            <h1 className='text-3xl text-center text-red-600'>Hello this is user page</h1>
            {
                users.map((user) => (
                    <h1>hello : {user.firstName}</h1>
                ))
            }
        </div>
    )
}

export default UserPage
