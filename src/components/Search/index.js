import axios from 'axios';
import { useState } from 'react'

export default function Search({ token, setTracks}) {

    const [query, setQuery] = useState('')

    async function handleSearch ()  {

            if(query !== ''){
                try {
                    let url = `https://api.spotify.com/v1/search?q=${query}&type=track,artist`;
                    const result  = await axios.get(url, {
                      headers: {
                        'Authorization': `Bearer ${token}`
                      },
                    })
                      setTracks(result.data.tracks.items);
                      setQuery('')
                  } catch (err) {
                    console.error(err);
                  }
            }
    }

    return (
        <div className = "search">
            <input
            onChange={(e) => setQuery(e.target.value)} 
            type="text" 
            value={query}
            placeholder='Search....'/>
            <button onClick={handleSearch}> Search </button>
        </div>
    )
}
