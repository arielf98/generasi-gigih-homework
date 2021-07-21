import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ProfileIcon from '../ProfileIcon'

export default function Navbar({token}) {

    const [userProfile, setUserProfile] = useState([])

    function Login(){
        const scope = 'playlist-modify-private'
        const redirect_uri = 'http://localhost:3000'
        const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID
        const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true&scope=${scope}`;

        window.location = url
    }

   

    useEffect(() => {

      const getUserProfile = async () => {
          
        try {
          const url = 'https://api.spotify.com/v1/me'
          const result  = await axios.get(url, {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
          setUserProfile(result.data)
        } catch (err) {
          console.error(err);
        }
}
        getUserProfile()
    }, [token])


    return (
        <div>
            <div className="navbar">
                <h1>Create Playlist</h1>

                {
                    userProfile.length  === 0  ? 
                    <button onClick={() => Login()} > Login </button>  :
                     <ProfileIcon
                        url={userProfile.images[0]?.url}
                        name={userProfile.display_name} /> 
                    
                }
               
            </div>
        </div>
    )
}
