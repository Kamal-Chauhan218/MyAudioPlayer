import React from "react";
import { useParams } from "react-router-dom";
import "./AudioPlayer.css";
const songDetails = {
  EscapeDoc: {
    title: "The Chase-Escape Loop of Adulthood",
    artist: "By NoteBook",
    background: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    cover: "https://i.imgur.com/UYiroysl.jpg", // <-- example cover image
  },
  song2: {
    title: "Night Drive",
    artist: "Synthwave",
    background: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    cover: "https://i.imgur.com/UYiroysl.jpg", // <-- example cover image
  },
};

const AudioPlayer = () => {
  const { track } = useParams();
  const filePath = `/audio/${track}.wav`;
  console.log(filePath, "PATH");
  const song = songDetails[track];
  if (!song) {
    return <div className="audio-wrapper">Song not found</div>;
  }

  return (
    <div
      className="audio-wrapper"
      style={{ backgroundImage: `url(${song.background})` }}
    >
      <div className="overlay">
        <div className="song-info">
          <h1>{song.title}</h1>
          <p>{song.artist}</p>
        </div>

        {/* 🎵 Cover Image above audio player */}
        <img
          src={`/images/EscapeDoc.png`}
          alt={`${song.title} cover`}
          className="cover-image"
        />

        <audio controls className="audio-player">
          <source src={filePath} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;
