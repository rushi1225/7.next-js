import React from 'react'
import Link from "next/link";


const DyanamicMetaData = () => {
    return (
        <div>
            <h1>Dyanamic Mata data page </h1>

            <br /><br /><br />
            <Link href="/">Home page</Link>
        </div>
    )
}


// create dyanamic meta data as-->check in headimg of tab & console element

export function generateMetadata() {
    return {
        title: "metadata page",
        description: "dyanamic meta data page description",
        keyword: "metadata page"

    }
}




export default DyanamicMetaData


