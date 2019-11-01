import React from 'react';

function Song(props) {
    let mappedSongs = props.songs.map(songs => <li>{songs} <button type="submit" name="yes">Mine Too | +</button>
    <button type="submit" name="no">What the?? | -</button></li>)
    return (
        <>
            <h1>Favorite Songs:</h1>
            <ul>
                {mappedSongs}
            </ul>
        </>
    )
}

export default Song;