import React from 'react'

import custom from "../custom.module.css"
import other from "../other.module.css"

const CustomCss = () => {
    return (
        <div>
            <h1 className={custom.main}>Hello this is custom css from custom module css</h1>

            <br />
            <h1 className={other.main}>Hello this is custom css from other module css</h1>
        </div>
    )
}

export default CustomCss
