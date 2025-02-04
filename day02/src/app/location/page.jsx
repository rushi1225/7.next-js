"use client"
import Script from 'next/script'
import React from 'react'

const UserLocation = () => {
    return (
        <div>

            {/* getting user location (location.js file save in public folder) */}
            <Script src='/location.js'></Script>
            <h1>Get user location</h1>
        </div>
    )
}

export default UserLocation
