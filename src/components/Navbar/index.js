import ProfileIcon from '../ProfileIcon'

export default function Navbar({token, userProfile}) {

      function Login(){
        const scope = 'playlist-modify-private'
        const redirect_uri = 'http://localhost:3000'
        const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID
        const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true&scope=${scope}`

        window.location = url
    }

    const isUserProfileEmpty = Object.keys(userProfile).length === 0 && userProfile.constructor === Object

    return (
        <div>
            <div className="navbar">
              {
                token ? <h1>Create Playlist</h1> : <h1> My Spotify </h1>
              }
                {
                    isUserProfileEmpty ?  (<button onClick={() => Login()} > Login </button> ) :
                     (<ProfileIcon
                        url={ userProfile?.images[0]?.url || false }
                        name={userProfile?.display_name} />)      
                }

            </div>
        </div>
    )
}
