import TrackList from '../TrackList/TrackList'
import Navbar from '../Navbar'
import Search from '../Search'
import { useState, useEffect } from 'react'
import CreatePlaylist from '../CreatePlaylist'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { storeToken, storeUserProfile } from '../../redux/userDataSlice'
import { getTokenFromParams } from '../../utils'
import { useHistory } from 'react-router'

export default function PlayList() {
    
 
  const token = useSelector(state => state.userData?.token)
  const dispatch = useDispatch()
  const history = useHistory()

  const state = useSelector(state => state.userData?.userProfile)
  console.log(state)

  const [tracks, setTracks] = useState([])
  const [selected, setSelected] = useState([])
  const [userProfile, setUserProfile] = useState({})
  const [showModal, setShowModal] = useState(false)

  

  useEffect(() => {
    // const token = getTokenFromParams().access_token
    // dispatch(storeToken(token))

 
   
    // async function getUserProfile(){
    //     try {
    //       const url = 'https://api.spotify.com/v1/me'
    //       const result  = await axios.get(url, {
    //         headers: {
    //           'Authorization': `Bearer ${token}`
    //         },
    //       })
    //       setUserProfile(result.data)
    //       dispatch(storeUserProfile(result.data))
    //     } catch (err) {
    //       console.error(err);
    //     }
    // }
    // getUserProfile()

}, [dispatch])

console.log('ini token', token)

    return (
        <>
          
                <Navbar
                    setShowModal={setShowModal}
                    userProfile={userProfile} />       

            {
            token &&  (

                    <Search
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
                        
                    }) 
                }
            </div>
        </>
    )
}
