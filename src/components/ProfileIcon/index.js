import React from 'react'


export default function ProfileIcon({url, name}) {

    
    return (
             <div className="navbar-icon">
                    <img src={url} alt="" />
                    <p> {name} </p>
                </div>
    )
}
