import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { storeToken, storeUserProfile } from '../../redux/userDataSlice'
import { getTokenFromParams } from '../../utils'
import PlayList from '../PlayList'

export default function Home() {

    const token  = useSelector(state => state.userData?.token)
    const isLogin = useSelector(state =>state.userData?.isLogin)
    const dispatch = useDispatch()
    const history = useHistory()

    console.log('token', token)

    useEffect(() => {
        const token = getTokenFromParams().access_token
        dispatch(storeToken(token))
    }, [])

    return (
        <>
            <Navbar/>
            <div className="App">
              
                <p className="app-body-text"> Selamat Datang Di My Spotify</p>
            </div>
        </>
        
    )
}
