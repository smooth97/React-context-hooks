import React, { useState, useEffect } from 'react';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'memory gospel', id: 2},
        {title: 'this wild darkness', id: 3},
    ])

    const [ids, setIds] = useState(4);

    const [titles, setTitles] = useState('');

    const onChange = (e) => {
        setTitles(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIds(ids + 1);
        setSongs([...songs, {title: titles, id: ids}])
    }

    useEffect(() => {
        console.log('useEffect', songs);
    }, [songs])
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li> )
                })}
            </ul>
            <form onSubmit={onSubmit}>
                <input type="text" name={titles} value={titles} onChange={onChange}/>
                <button>Add a song</button>
            </form>
        </div>
    )
}

export default SongList;