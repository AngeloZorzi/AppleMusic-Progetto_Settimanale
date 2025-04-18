import React from "react";
import { useSelector } from "react-redux";
import { Play, SkipForward, Music2 } from "lucide-react";

const PlayerMobile = () => {
  const song = useSelector((state) => state.player.currentSong);

  if (!song) return null;

  return (
    <div className="player-mobile d-md-none">
      <div className="player-left">
        <div className="thumbnail">
          {song.album?.cover_small ? (
            <img src={song.album.cover_small} alt={song.title} />
          ) : (
            <Music2 size={20} className="placeholder-icon" />
          )}
        </div>
        <div className="song-info">
          <div className="song-title">{song.title}</div>
        </div>
      </div>
      <div className="controls">
        <Play size={22} className="icon" />
        <SkipForward size={22} className="icon" />
      </div>
    </div>
  );
};

export default PlayerMobile;
