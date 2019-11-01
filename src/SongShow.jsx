import React from 'react';

function SongShow(props) {
    return (
        <>
            <h1>Your Song Detail: {props.match.params.id}</h1>
        </>
    )
}

export default SongShow;