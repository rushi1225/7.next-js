'use client'
//dynamic routing 
import Link from 'next/link';
import React from 'react'

const StudentList = () => {
    const Student = ['rushi', 'gaurav', 'sachin'];
    return (
        <div>
            <h1 className='text-2xl font-bold'>Student list </h1>
            <ul>
                {Student.map((user) => {
                    return (
                        <li>{<Link href={`/studentlist/${user}`}>{user}</Link>}</li>)
                })}
            </ul>
        </div>

    )
}

export default StudentList

