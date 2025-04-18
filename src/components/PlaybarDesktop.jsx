import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  Play,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  Volume2,
  User,
} from "lucide-react";
import { Container } from "react-bootstrap";

const PlayerDesktop = () => {
  const song = useSelector((state) => state.player.currentSong);
  const [volume, setVolume] = useState(0);
  if (!song) return null;

  return (
    <Container fluid className=" w-100">
      <div className="player-desktop d-none d-md-flex justify-content-between align-items-center">
        <div className="player-song-title">
          <p className="song-title mb-0">{song.title}</p>
        </div>

        <div className="d-flex align-items-center controls">
          <Shuffle size={14} className="text-secondary" />
          <SkipBack size={14} className="text-secondary" />
          <Play size={18} className="main-btn" />
          <SkipForward size={14} className="text-secondary" />
          <Repeat size={14} className="text-secondary" />
        </div>

        <div className="apple-logo">
          <img src="./assets/apple.svg" alt="Apple logo" />
        </div>

        {/* Volume + login */}
        <div className="d-flex align-items-center volume-login">
          <Volume2 size={14} />
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="form-range volume-slider"
            style={{ "--value": `${volume}%` }}
          />
          <button className="login-btn">
            <User size={15} />
            Accedi
          </button>
        </div>
      </div>
    </Container>
  );
};

export default PlayerDesktop;
