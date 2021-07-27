import TrackList from '../TrackList/TrackList'
import Navbar from '../Navbar'
import Search from '../Search'
import { getTokenFromParams } from '../../utils'
import { useState, useEffect } from 'react'
import CreatePlaylist from '../CreatePlaylist'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { storeToken } from '../../redux/userDataSlice'

export default function PlayList() {
    
 
  const token = useSelector(state => state.userData?.token)
  const dispatch = useDispatch()

  const [tracks, setTracks] = useState([])
  const [selected, setSelected] = useState([])
  const [userProfile, setUserProfile] = useState({})
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const token = getTokenFromParams().access_token
    dispatch(storeToken(token))

    async function getUserProfile(){
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

}, [dispatch])

    return (
        <>
                <Navbar
                    userProfile={userProfile} />       

            {
            token &&  (

                    <Search
                      showModal={showModal}
                      setShowModal={setShowModal}
                      selected={selected}
                      setTracks={setTracks} />
                ) 
            }

            {
               showModal && <CreatePlaylist
                              setSelected={setSelected}
                              userProfile={userProfile}
                              selected={selected}
                              showModal={showModal}
                              setShowModal={setShowModal} />
            }
              
            <div className="App">

                {
                token ? 
                    tracks.map(song => {
                        return (
                        <TrackList
                        key = {song.id}
                        uri = {song.uri}
                        token={token}
                        selected={selected}
                        setSelected={setSelected}
                        url = {song.album.images[1].url}
                        name = {song.album.name}
                        artist = {song.artists[0].name} 
                        album = {song.name} />
                        )
                        
                    }) : (<p className="app-body-text"> Selamat Datang Di My Spotify</p>) 
                }
            </div>
        </>
    )
}
