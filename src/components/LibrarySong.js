import React from "react";

function LibrarySong({
  song,
  setCurrentSong,
  isPlaying,
  audioRef,
  setSongs,
  songs,
  id,
}) {
  const songHandler = async () => {
    await setCurrentSong(song);
    const newSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSong);

    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songHandler}
      className={`librarysong ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="image of music" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
