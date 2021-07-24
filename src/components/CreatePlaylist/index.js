import React , {useState} from 'react'
import './Styles.css'
import axios from 'axios'

export default function CreatePlaylist({token, userProfile, setPlaylistId}) {

    const [form, setForm] = useState({
        nama : '',
        deskripsi : '',
    })

    function handleOnchange(e){
        const name = e.target.name
        const value = e.target.value
        setForm({...form, [name] : value })
    }

    async function createPlaylist(e){
        e.preventDefault()
        try{
            const config = {
                method: 'post',
                url : `https://api.spotify.com/v1/users/${userProfile.id}/playlists`,
                headers : {
                    'Authorization': `Bearer ${token}`
                  },
                  data : {
                    "name": `${form.nama}`,
                    "description": `${form.deskripsi}`,
                    "public": false,
                  }
            } 
            const result = await axios(config)
            setPlaylistId(result.data.id)
            alert('Playlist Berhasil Dibuat')
            setForm({nama : '', deskripsi : ''})
            
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className="create-playlist-container">
            <form onSubmit={createPlaylist} >
                <label htmlFor="nama"> Nama Playlist </label>
                <input  onChange={handleOnchange} type="text" value={form.nama} placeholder="Nama Playlist" id="nama" name="nama"/>
                <label htmlFor="deskripsi"> Deskripsi Playlist </label>
                <input onChange={handleOnchange} type="text" value={form.deskripsi} placeholder="Deskripsi Playlist" id="deskripsi" name="deskripsi" />
                <input type="submit" value="Buat" />
            </form>
        </div>
    )
}
