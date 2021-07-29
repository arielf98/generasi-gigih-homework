import ProfileIcon from '../ProfileIcon'
import { useSelector, useDispatch} from 'react-redux'
import { storeToken, storeUserProfile, isLogin } from '../../redux/userDataSlice'
import { getTokenFromParams } from  '../../utils'
import { useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'


export default function Navbar({setShowModal}) {

      const token = useSelector(state => state.userData?.token)
      const userProfile = useSelector(state => state.userData?.userProfile)
      const dispatch = useDispatch()
      const history = useHistory()

      function Login(){
        const scope = 'playlist-modify-private'
        const redirect_uri = 'http://localhost:3000'
        const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID
        const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true&scope=${scope}`
        dispatch(isLogin(true))
        window.location = url
    }

    const handleCreatePlaylist = () =>{
      token ? history.push('/playlist') : history.push('/')
    }

    const handleLogOut = () => {
      history.push('/')
      dispatch(storeToken(''))
      dispatch(storeUserProfile({}))
    }


    useEffect(() => {

      async function getUserProfile(){
        try {
          const url = 'https://api.spotify.com/v1/me'
          const result  = await axios.get(url, {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
          // setUserProfile(result.data)
          dispatch(storeUserProfile(result.data))
        } catch (err) {
          console.error(err);
        }
    }
    getUserProfile()
    }, [token])

    useEffect(() => {

      async function getUserProfile(){
        try {
          const url = 'https://api.spotify.com/v1/me'
          const result  = await axios.get(url, {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
          // setUserProfile(result.data)
          dispatch(storeUserProfile(result.data))
        } catch (err) {
          console.error(err);
        }
    }
    getUserProfile()
    }, [dispatch])

   
    const isUserProfileEmpty = Object.keys(userProfile).length === 0 && userProfile.constructor === Object

    return (
        <div>
            <div className="navbar">
              {
                token ? <h1>Create Playlist</h1> : <h1> My Spotify </h1>
              }

              <button onClick={handleCreatePlaylist}> Create Playlist </button>
              {
                token && <button onClick={handleLogOut}> Log Out </button>
              }

                {
                    isUserProfileEmpty ? (<button onClick={() => Login()} > Login </button> ) :
                     (<ProfileIcon
                        url={ userProfile?.images[0]?.url }
                        name={userProfile?.display_name} />)  
                }

            </div>
        </div>
    )
}
