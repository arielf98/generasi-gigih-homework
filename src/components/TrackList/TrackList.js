import './Styles.css'

export default function TrackList({url, name, artist, album, uri, setSelected, selected}) {

    function selectTracks(){
            setSelected([...selected, uri])
    }

    function deselectTracks(){
        const selectedArray = [...selected]
        const index = selectedArray.indexOf(uri)
        if(index > -1){
            selectedArray.splice(index, 1)
            setSelected(selectedArray)
        }
    }

    const isTrackSelected = selected.includes(uri)

    return (
        
            <div className="playlist-container">
                        <img src={url} alt="" />
                        <div className="playlist-text">
                            <p>{name}</p>
                            <p>{artist}</p>
                            <p>{album}</p>
                            <button
                            className={isTrackSelected ? 'selected-button' : null}
                            onClick={() => isTrackSelected ?  
                                            deselectTracks() : 
                                            selectTracks()}>

                                {isTrackSelected ? 'Selected' : 'Select'}

                            </button>
                        </div>
                    </div>
    )
}
