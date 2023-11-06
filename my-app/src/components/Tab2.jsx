import React, { useState } from "react";
import "./Tab2.css";


const Tab2 = () => {
  const [currentSong, setCurrentSong] = useState(2);
  const musicList = [
    {
      id: 1,
      song: "Song 1",
      Artist: "Artist 1",
    },
    {
      id: 2,
      song: "Song 2",
      Artist: "Artist 2",
    },
    {
      id: 3,
      song: "Song 3",
      Artist: "Artist 3",
    },
    {
      id: 4,
      song: "Song 4",
      Artist: "Artist 4",
    },
    {
      id: 5,
      song: "Song 5",
      Artist: "Artist 5",
    },
  ];
  return (
    <div className="mainContainer">
      <div className="music-card">
        { currentSong>=0 && currentSong<5 ?
        (<div className="main">
          <div className="song-title">{musicList[currentSong].song}</div>
          <div className="artist">{musicList[currentSong].Artist}</div>
          <div className="btn-container">
            <button onClick={() => setCurrentSong(currentSong-1)}>Previous</button>
            <button>Pause</button>
            <button onClick={() => setCurrentSong(currentSong+1)}>Next</button>
          </div>
        </div>):(
            <>
        <div>End of Playlist</div>
        <div className="btn-container">
        <button onClick={() => setCurrentSong(currentSong-1)}>Previous</button>
        <button>Pause</button>
        <button onClick={() => setCurrentSong(currentSong+1)}>Next</button>
          </div>
            </>
       )
        }
      </div>
    </div>
  );
};

export default Tab2;
