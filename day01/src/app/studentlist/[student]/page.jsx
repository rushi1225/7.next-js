//dyanamic routing
'use client'
import React from 'react'

const Student = ({ params }) => {
    return (
        <div>
            <h1>Student Details</h1>
            <h1>Name: {params.student}</h1>
        </div>
    )
}

export default Student
