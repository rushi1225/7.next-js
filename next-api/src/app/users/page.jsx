import Link from 'next/link';
import React from 'react'


const getUsers = async () => {
    const req = await fetch(`http://localhost:3000/api/users`)
    const data = await req.json();
    return data;
}

const UsersPage = async () => {
    const users = await getUsers()
    return (
        <div>
            <h1>heyy  hello this is new user page & user page as follow</h1>
            {
                users.map((item) => (
                    <div>
                        <Link href={`users/${item.id}`}>{item.name}</Link>
                    </div>
                ))
            }

        </div>
    )
}

export default UsersPage
