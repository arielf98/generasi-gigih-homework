import React from 'react'


export default function Search({handleSearch, query, setQuery}) {


    return (
        <div className = "search">
            <input
            onChange={(e) => setQuery(e.target.value)} 
            type="text" 
            value={query}
            placeholder='Search....'/>
            <button onClick={handleSearch} > Search </button>
        </div>
    )
}
