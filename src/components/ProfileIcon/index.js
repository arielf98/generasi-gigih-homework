import React from 'react'
import { CgProfile } from "react-icons/cg"

export default function ProfileIcon({url, name}) {

    return (
             <div className="navbar-icon">

                    {
                        url ? (<img src={url} alt="" />) : <CgProfile size={50} color = 'white' /> 
                    }

                    <p> {name} </p>
                </div>
    )
}
